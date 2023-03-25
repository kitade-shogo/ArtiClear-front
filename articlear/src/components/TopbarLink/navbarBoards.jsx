import { useLocation } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Navbar.Link isActive href="/boards">
            Boards
        </Navbar.Link>
    ) : (
        <Navbar.Link href="/boards">Boards</Navbar.Link>
    )
}

export default NavbarBoards;
