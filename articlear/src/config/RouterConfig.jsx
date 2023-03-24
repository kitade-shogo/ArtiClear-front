import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookmarks from '../components/bookmarks'
import Calender from '../components/calender'
import Boards from '../components/boards'
import MyPage from '../components/myPage'

const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/boards" element={<Boards />} />
                    <Route path="/mypage" element={<MyPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouterConfig;
