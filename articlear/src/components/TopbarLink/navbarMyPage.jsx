import { useLocation, Link } from 'react-router-dom'

const NavbarMyPage = () => {
    const path = useLocation().pathname

    return path === '/mypage' ? (
        <Link style={{ color: '#0072F5' }} to="/mypage">
            MyPage
        </Link>
    ) : (
        <Link style={{ color: 'white' }}  to="/mypage">
            MyPage
        </Link>
    )
}

export default NavbarMyPage;
