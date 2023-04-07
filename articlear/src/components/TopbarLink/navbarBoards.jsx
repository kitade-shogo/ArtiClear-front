import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Navbar.Item isactive="true">
            <Link to="/boards">
                <p className='font-bold'>Boards</p>
            </Link>
        </Navbar.Item>
    ) : (
        <Navbar.Item>
            <Link to="/boards" className="text-black">
                <p className='font-medium'>Boards</p>
            </Link>
        </Navbar.Item>
    )
}

export default NavbarBoards
