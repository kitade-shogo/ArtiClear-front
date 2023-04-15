import { Pagination } from '@nextui-org/react'
import TopBar from '../topbar'
import MyBoard from '../myBoard'

const Boards = () => {
    return (
        <>
            <TopBar />
            <div className="container flex-col justify-center mx-24 py-8 space-y-10">
                <p className="my-8 font-oswald text-5xl text-center">
                    What Others See
                </p>
                <div className="flex flex-wrap justify-between gap-6 ">
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                    <MyBoard />
                </div>
                <div className="flex justify-center">
                    <Pagination
                        onlyDots
                        size="xl"
                        rounded
                        initialPage={1}
                        total={6}
                    />
                </div>
            </div>
        </>
    )
}

export default Boards
