import { useLocation } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarMyPage = () => {
    const path = useLocation().pathname

    return path === '/mypage' ? (
        <Navbar.Link isActive href="/mypage">
            MyPage
        </Navbar.Link>
    ) : (
        <Navbar.Link href="/mypage">MyPage</Navbar.Link>
    )
}

export default NavbarMyPage;
