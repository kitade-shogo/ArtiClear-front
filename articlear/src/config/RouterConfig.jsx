import { Routes, Route } from 'react-router-dom'
import Bookmarks from '../components//pages/bookmarks'
import Calender from '../components/pages/calender'
import Boards from '../components/pages/boards'
import MyPage from '../components/pages/myPage'

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
