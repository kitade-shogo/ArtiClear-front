import { Routes, Route, Navigate } from 'react-router-dom'
import useFirebaseAuth from '../components/hooks/useFirebaseAuth'
import Bookmarks from '../components//pages/bookmarks'
import Calender from '../components/pages/calender'
import MyPage from '../components/pages/myPage'
import Top from '../components/pages/top'
import { useAuthContext } from '../components/context/AuthContext'
import TopBarLogin from '../components/topbar'
import Topbar from '../components/topbarAnother'

const PrivateRoute = ({ children, currentUser }) => {
    return currentUser ? children : <Navigate to="/" />
}

const LoginControll = () => {
    const { currentUser } = useAuthContext()
    return currentUser ? <Bookmarks /> : <Top />
}

const RouterConfig = () => {
    const { currentUser } = useFirebaseAuth()

    return (
        <>
            { currentUser ? <TopBarLogin/> : <Topbar />  }
            <Routes>
                <Route path="/" element={<LoginControll/>} />
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
