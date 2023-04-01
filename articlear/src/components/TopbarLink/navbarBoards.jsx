import { useLocation, Link } from 'react-router-dom'
import { Navbar} from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Navbar.Link isActive>
            <Link to="/boards" isActive>
                Boards
            </Link>
        </Navbar.Link>
    ) : (
        <Navbar.Link>
            <Link to="/boards" className="text-black">
                Boards
            </Link>
        </Navbar.Link>
    )
}

export default NavbarBoards
