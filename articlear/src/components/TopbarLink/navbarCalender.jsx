import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Navbar.Link isActive>
            <Link to="/calender">Calender</Link>
        </Navbar.Link>
    ) : (
        <Navbar.Link>
            <Link to="/calender" className="text-black">
                Calender
            </Link>
        </Navbar.Link>
    )
}

export default NavbarCalender
