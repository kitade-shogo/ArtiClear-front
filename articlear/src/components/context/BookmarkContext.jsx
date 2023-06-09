import { createContext, useContext, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './AuthContext'

export const BookmarkContext = createContext()

export const BookmarkContextProvider = ({ children }) => {
    // フェッチしてきたブックマーク
    const [bookmarks, setBookmarks] = useState([])
    // 選択されたフィルタに紐づくブックマークのみ表示するためのフラグ
    const [filteredBookmarks, setFilteredBookmarks] = useState([])

    const { currentUser } = useAuthContext()

    //tokenを取得する関数
    const setToken = async () => {
        const token = await currentUser?.getIdToken()
        const config = {
            headers: { authorization: `Bearer ${token}` },
        }
        return config
    }

    const getBookmarks = async (config) => {
        try {
            const res = await axios.get(
                `${process.env.REACT_APP_BACKEND_URL}/api/v1/bookmarks`,
                config
            )
            console.log('getBookmark')
            setBookmarks(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    //tokenを取得してからgetBookmarksを実行する関数
    const fetchBookmarks = async () => {
        const config = await setToken()
        getBookmarks(config)
    }

    const deleteBookmark = async (bookmarkId) => {
        const config = await setToken()
        try {
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/bookmarks/${bookmarkId}`, config)
            fetchBookmarks()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <BookmarkContext.Provider
            value={{
                bookmarks,
                setBookmarks,
                filteredBookmarks,
                setFilteredBookmarks,
                fetchBookmarks,
                deleteBookmark
            }}
        >
            {children}
        </BookmarkContext.Provider>
    )
}

export const useBookmarkContext = () => useContext(BookmarkContext)
