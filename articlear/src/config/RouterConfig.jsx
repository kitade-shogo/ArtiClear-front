import { Routes, Route, Navigate } from 'react-router-dom'
import useFirebaseAuth from '../components/hooks/useFirebaseAuth'
import Bookmarks from '../components//pages/bookmarks'
import Calender from '../components/pages/calender'
import Boards from '../components/pages/boards'
import MyPage from '../components/pages/myPage'
import Top from '../components/pages/top'

const PrivateRoute = ({ children, currentUser }) => {
    return currentUser ? children : <Navigate to="/" />
}

const RouterConfig = () => {
    const { currentUser } = useFirebaseAuth()

    return (
        <>
            <Routes>
                <Route path="/" element={<Top />} />
                <Route
                    path="/bookmarks"
                    element={
                        <PrivateRoute currentUser={currentUser}>
                            <Bookmarks />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/calender"
                    element={
                        <PrivateRoute currentUser={currentUser}>
                            <Calender />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/boards"
                    element={
                        <PrivateRoute currentUser={currentUser}>
                            <Boards />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/mypage"
                    element={
                        <PrivateRoute currentUser={currentUser}>
                            <MyPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default RouterConfig
