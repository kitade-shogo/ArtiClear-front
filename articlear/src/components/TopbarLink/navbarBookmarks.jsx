import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBookmarks = () => {
    const path = useLocation().pathname

    return path === '/bookmarks' ? (
        <Navbar.Item isactive="true">
            <Link to="/bookmarks">
                <p className='font-bold text-primary'>Bookmarks</p>
            </Link>
        </Navbar.Item>
    ) : (
        <Navbar.Item>
            <Link to="/bookmarks">
                <p className='text-black font-medium hover:text-my-gray'>Bookmarks</p>
            </Link>
        </Navbar.Item>
    )
}

export default NavbarBookmarks
