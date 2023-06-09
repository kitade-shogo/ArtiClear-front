
import { Routes, Route, Navigate } from 'react-router-dom'
import Bookmarks from '../components//pages/bookmarks'
import Calender from '../components/pages/calender'
import MyPage from '../components/pages/myPage'
import Top from '../components/pages/top'
import PrivacyPolicy from '../components/pages/privacyPolicy'
import TermsOfService from '../components/pages/termsOfService'
import { useAuthContext } from '../components/context/AuthContext'
import TopBar from '../components/topbar'
import TopbarAnother from '../components/topbarAnother'

const PrivateRoute = ({ children, currentUser }) => {
    return currentUser ? children : <Navigate to="/" />
}

const LoginControll = () => {
    const { currentUser } = useAuthContext()
    return currentUser ? <Bookmarks /> : <Top />
}

const RouterConfig = () => {
    const { currentUser } = useAuthContext()

    return (
        <>
            {currentUser ? <TopBar /> : <TopbarAnother />}
            <Routes>
                <Route path="/" element={<LoginControll />} />
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
                <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                <Route path="/terms_of_service" element={<TermsOfService />} />
            </Routes>
        </>
    )
}

export default RouterConfig
