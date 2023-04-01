import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarMyPage = () => {
    const path = useLocation().pathname

    return path === '/mypage' ? (
        <Navbar.Link isActive >
            <Link to="/mypage">MyPage</Link>
        </Navbar.Link>
    ) : (
            <Navbar.Link>
            <Link to="/mypage" className='text-black'>MyPage</Link>
        </Navbar.Link>
    )
}

export default NavbarMyPage
