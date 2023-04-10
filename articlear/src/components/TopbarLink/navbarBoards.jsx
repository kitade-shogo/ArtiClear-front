import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Navbar.Item isactive="true">
            <Link to="/boards">
                <p className="font-bold text-primary">Boards</p>
            </Link>
        </Navbar.Item>
    ) : (
        <Navbar.Item>
                <Link to="/boards">
                <p className="text-black font-medium hover:text-my-gray">
                    Boards
                </p>
            </Link>
        </Navbar.Item>
    )
}

export default NavbarBoards
