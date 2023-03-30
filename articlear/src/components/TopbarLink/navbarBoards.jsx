import { useLocation, Link } from 'react-router-dom'
import { Text } from '@nextui-org/react'

const NavbarBoards = () => {
    const path = useLocation().pathname

    return path === '/boards' ? (
        <Link to="/boards">
            <Text b css={{ color: '$textLowContrast' }}>
                Boards
            </Text>
        </Link>
    ) : (
        <Link to="/boards">
            <Text b style={{ color: '#eaf6ff' }}>
                Boards
            </Text>
        </Link>
    )
}

export default NavbarBoards;
