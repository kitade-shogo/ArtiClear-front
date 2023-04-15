import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Link to="/boards">
            <p className="font-normal text-primary">Boards</p>
        </Link>
    ) : (
        <Link to="/boards">
            <p className="text-black font-normal hover:text-my-gray">Boards</p>
        </Link>
    )
}

export default NavbarBoards
