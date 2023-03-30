import { useLocation, Link } from 'react-router-dom'
import { Text } from '@nextui-org/react'

const NavbarCalender = () => {
    const path = useLocation().pathname

    return path === '/calender' ? (
        <Link to="/calender">
            <Text b css={{ color: '$textLowContrast' }}>
                Calender
            </Text>
        </Link>
    ) : (
        <Link to="/calender">
            <Text b style={{ color: '#eaf6ff' }}> Calender</Text>
        </Link>
    )
}

export default NavbarCalender;
