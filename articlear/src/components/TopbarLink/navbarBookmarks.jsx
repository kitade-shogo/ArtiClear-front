import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBookmarks = () => {
    const path = useLocation().pathname

    return path === '/bookmarks' ? (
        <Navbar.Item isactive="true">
            <Link to="/bookmarks">
                <p className='font-bold'>Bookmarks</p>
            </Link>
        </Navbar.Item>
    ) : (
        <Navbar.Item>
            <Link to="/bookmarks" className="text-black">
                <p>Bookmarks</p>
            </Link>
        </Navbar.Item>
    )
}

export default NavbarBookmarks
