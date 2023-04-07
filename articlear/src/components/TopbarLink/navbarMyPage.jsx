import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarMyPage = () => {
    const path = useLocation().pathname

    return path === '/mypage' ? (
        <Navbar.Item isactive="true" >
            <Link to="/mypage">MyPage</Link>
        </Navbar.Item>
    ) : (
            <Navbar.Item>
            <Link to="/mypage" className='text-black'>MyPage</Link>
        </Navbar.Item>
    )
}

export default NavbarMyPage
