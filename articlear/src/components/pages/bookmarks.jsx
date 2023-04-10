import {
    Textarea,
    Button,
} from '@nextui-org/react'
import MySidebar from '../sidebar'
import MyCard from '../card'

const Bookmarks = () => {
    return (
        <>
            <div className="container flex justfy-center mx-24 my-8">
                <MySidebar />
                <div className="w-full space-y-8">
                    <p className="text-3xl"> React の記事</p>
                    <div className="flex-cols h-120 overflow-y-auto">
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
