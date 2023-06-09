import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './AuthContext'

export const FolderContext = createContext()

export const FolderContextProvider = ({ children }) => {
    // フェッチしてきたフォルダ
    const [folders, setFolders] = useState([])
    // Sidebarで選択されたフォルダの状態管理
    const [selectedFolder, setSelectedFolder] = useState('')

    const { currentUser } = useAuthContext()

    //tokenを取得する関数
    const setToken = async () => {
        const token = await currentUser?.getIdToken()
        const config = {
            headers: { authorization: `Bearer ${token}` },
        }
        return config
    }

    // BEにフォルダ取得リクエストを送る関数
    const getFolders = async (config) => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/folders`,
                config
            )
            console.log('getFolder')
            setFolders(res.data.data)
            // とりあえず最新のフォルダをselectedFolderに指定
            setSelectedFolder(res.data.data[0])
        } catch (err) {
            console.log(err)
        }
    }

    //tokenを取得してからgetFoldersを実行する関数
    const fetchFolders = async () => {
        const config = await setToken()
        getFolders(config)
    }
    
    // フォルダを追加する関数。追加後、追加分も含めてデータフェッチしてきている
    const addFolder = async (data) => {
        const config = await setToken()
        try {
            await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/folders`,
                { name: data.folderName },
                config
            )
            // Fetch the folders again after adding a new one
            fetchFolders()
        } catch (err) {
            console.log(err)
        }
    }

    // フォルダを削除する関数。削除後、削除分を反映させるためにデータフェッチしてきている
    const deleteFolder = async (folderID) => {
        const config = await setToken()
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/folders/${folderID}`,
                config
            )
            fetchFolders()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <FolderContext.Provider
            value={{
                folders,
                setFolders,
                selectedFolder,
                setSelectedFolder,
                setToken,
                fetchFolders,
                addFolder,
                deleteFolder,
            }}
        >
            {children}
        </FolderContext.Provider>
    )
}

export const useFolderContext = () => useContext(FolderContext)
