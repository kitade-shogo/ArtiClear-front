import { useLocation, Link } from 'react-router-dom'

const NavbarBookmarks = () => {
    const path = useLocation().pathname

    return path === '/bookmarks' ? (
        <Link to="/bookmarks">
            <p className="font-semibold text-primary">Bookmarks</p>
        </Link>
    ) : (
        <Link to="/bookmarks">
            <p className="text-black font-normal hover:text-my-gray">
                Bookmarks
            </p>
        </Link>
    )
}

export default NavbarBookmarks
