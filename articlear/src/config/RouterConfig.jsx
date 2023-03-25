import { Routes, Route } from 'react-router-dom'
import Bookmarks from '../components/bookmarks'
import Calender from '../components/calender'
import Boards from '../components/boards'
import MyPage from '../components/myPage'

const RouterConfig = () => {
    return (
        <>
            <Routes>
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/boards" element={<Boards />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>
        </>
    )
}

export default RouterConfig
