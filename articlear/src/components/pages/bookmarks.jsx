import {
    Textarea,
    Button,
} from '@nextui-org/react'
import { useEffect } from 'react'
import MyCard from '../card'
import Sidebar from '../sidebar'
import TopBar from '../topbar'
import axios from 'axios'

const Bookmarks = () => {

    useEffect(() => { 
        const getBookmarks = async () => { 
            const res = await axios.get('http://localhost:3100/bookmarks')
            console.log(res.data)
        }
        getBookmarks()
    }, [])


    return (
        <>
            <TopBar />
            <div className="container flex justfy-center mx-24 py-8 space-x-10">
                <Sidebar />
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
