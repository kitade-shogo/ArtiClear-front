import { useLocation, Link } from 'react-router-dom'
import { Navbar } from '@nextui-org/react'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Navbar.Item isactive="true">
            <Link to="/calender">
                <p className='font-bold'>Calender</p>
            </Link>
        </Navbar.Item>
    ) : (
        <Navbar.Item>
            <Link to="/calender" className="text-black">
                <p>Calender</p>
            </Link>
        </Navbar.Item>
    )
}

export default NavbarCalender
