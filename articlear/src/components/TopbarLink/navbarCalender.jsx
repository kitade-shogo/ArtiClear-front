import { useLocation } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Navbar.Link isActive href="/calender">
            Calender
        </Navbar.Link>
    ) : (
        <Navbar.Link href="/calender">Calender</Navbar.Link>
    )
}

export default NavbarCalender;
