import { useLocation, Link } from 'react-router-dom'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Link style={{ color: '#0072F5' }} to="/boards">
            Boards
        </Link>
    ) : (
        <Link style={{ color: 'white' }} to="/boards">
            Boards
        </Link>
    )
}

export default NavbarBoards;
