import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBookmarks = () => {
    const path = useLocation().pathname

    return path === '/bookmarks' ? (
        <Navbar.Link isActive>
            <Link to="/bookmarks">Bookmarks</Link>
        </Navbar.Link>
    ) : (
        <Navbar.Link>
            <Link to="/bookmarks" className="text-black">
                Bookmarks
            </Link>
        </Navbar.Link>
    )
}

export default NavbarBookmarks
