import { Textarea, Button } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import MyCard from '../card'
import Sidebar from '../sidebar'
import TopBar from '../topbar'
import axios from 'axios'
import { useAuthContext } from '../context/AuthContext'

const Bookmarks = () => {
    const [folders, setFolders] = useState([])
    const [folderCount, setFolderCount] = useState(0)

    const { currentUser } = useAuthContext()

    useEffect(() => {
        const setToken = async () => {
            // ここでtokenを取得
            const token = await currentUser?.getIdToken()
            const config = {
                headers: { authorization: `Bearer ${token}` },
            }
            return config
        }

        const getFolders = async (config) => {
            try {
                const res = await axios.get(
                    'http://localhost:3300/api/v1/folders',
                    config
                )
                setFolders(res.data.data)
                setFolderCount(res.data.length)
            } catch (err) {
                console.log(err)
            }
        }

        const fetchFolders = async () => {
            const config = await setToken()
            getFolders(config)
        }
        fetchFolders()
    }, [currentUser])

    return (
        <>
            <TopBar />
            <div className="container flex justfy-center mx-24 py-8 space-x-10">
                <Sidebar folders={folders} setFolders={setFolders} folderCount={folderCount} setFolderCount={setFolderCount} />
                <div className="w-full space-y-8">
                    <p className="text-3xl"> React の記事</p>
                    <div className="flex-cols h-144 overflow-y-auto">
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                        <MyCard />
                    </div>
                    <div className="flex w-11/12">
                        <Textarea
                            maxRows={1}
                            width="100%"
                            labelPlaceholder="URL"
                        />
                        <Button flat size="sm" color="primary">
                            Register
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookmarks
