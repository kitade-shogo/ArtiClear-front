import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Link to="/calender">
            <p className="font-normal text-primary">Calender</p>
        </Link>
    ) : (
        <Link to="/calender">
            <p className="text-black font-normal hover:text-my-gray">
                Calender
            </p>
        </Link>
    )
}

export default NavbarCalender
