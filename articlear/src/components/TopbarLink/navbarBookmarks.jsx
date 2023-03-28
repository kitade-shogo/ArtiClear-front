import { useLocation, Link } from "react-router-dom";

const NavbarBookmarks = () => {
    const path = useLocation().pathname
    
    return path === '/bookmarks' ? (
        <Link style={{ color: '#0072F5' }} to="/bookmarks">
            Bookmarks
        </Link>
    ) : (
        <Link style={{ color: 'white' }} to="/bookmarks">
            Bookmarks
        </Link>
    )
};

export default NavbarBookmarks;