import { useEffect, useState } from 'react'
import { Button, Modal, Text, Input, config } from '@nextui-org/react'
import axios from 'axios'
import { useAuthContext } from './context/AuthContext'

const Sidebar = () => {
    const [visible, setVisible] = useState(false)
    const [folderCount, setFolderCount] = useState(0)
    const [folderName, setFolderName] = useState('')
    const [folders, setFolders] = useState([])

    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
    }
    const addHandler = async () => {
        try {
            axios.post('http://localhost:3300/api/v1/folder', {
            id: folderCount + 1,
            name: folderName,
        })
            setFolderName('')
            setVisible(false)
        } catch (err) {
            console.log(err)
        }
    }

    const { currentUser } = useAuthContext()
    useEffect(() => {
        const setToken = async () => {
            console.log('setTokenスタート')
            // ここでtokenを取得
            const token = await currentUser?.getIdToken()
            const config = {
                headers: { authorization: `Bearer ${token}` },
            }
            console.log(`setToken終了`)
            return config
        };

        const getFolders = async (config) => {
            console.log("getFoldersスタート")
            try {
                const res = await axios.get(
                    'http://localhost:3300/api/v1/folders',
                    config
                )
                setFolders(res.data)
                setFolderCount(res.data.length)
                console.log('getFolders終了')
                console.log(folders)
            } catch (err) {
                console.log(err)
            }
        };

        const fetchFolders = async () => {
            const config = await setToken()
            console.log('setToken実行')
            getFolders(config)
            console.log('getFolders実行')
        };
        fetchFolders()
    }, [currentUser,folders])

    return (
        <>
            <aside
                id="default-sidebar"
                className="w-64 h-full rounded-lg mt-14"
                aria-label="Sidebar"
            >
                <div className="h-full px-1 py-2 overflow-y-auto">
                    <p className="text-xl font-semibold pl-3">Folders</p>
                    <ul className="space-y-2 font-medium">
                        {folders.map((folder) => {
                            return (
                                <li
                                    key={folder.id}
                                    className="flex  items-center p-2 rounded-lg  hover:bg-componentBackgroundHover"
                                >
                                    {folder.name}
                                </li>
                            )
                        })}
                        <li className="flex items-center p-2 rounded-lg">
                            <Button ghost auto onPress={handler}>
                                Add New Folder
                            </Button>
                            <Modal
                                closeButton
                                aria-labelledby="modal-title"
                                open={visible}
                                onClose={closeHandler}
                            >
                                <Modal.Header>
                                    <Text id="modal-title" size={18}>
                                        New
                                    </Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        placeholder="Folder Name"
                                        aria-labelledby="Folder Name"
                                        value={folderName}
                                        onChange={(e) =>
                                            setFolderName(e.target.value)
                                        }
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        auto
                                        flat
                                        color="error"
                                        onPress={closeHandler}
                                    >
                                        Close
                                    </Button>
                                    <Button auto onPress={addHandler}>
                                        Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
