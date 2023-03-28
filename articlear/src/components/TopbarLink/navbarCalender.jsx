import { useLocation, Link } from 'react-router-dom'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Link style={{ color: '#0072F5' }} to="/calender">
            Calender
        </Link>
    ) : (
        <Link style={{ color: 'white' }} to="/calender">
            Calender
        </Link>
    )
}

export default NavbarCalender;
