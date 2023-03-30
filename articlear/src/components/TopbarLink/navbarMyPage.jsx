import { useLocation, Link } from 'react-router-dom'
import { Text } from '@nextui-org/react'

const NavbarMyPage = () => {
    const path = useLocation().pathname

    return path === '/mypage' ? (
        <Link to="/mypage">
            <Text b css={{ color: '$textLowContrast' }}>
                MyPage
            </Text>
        </Link>
    ) : (
        <Link to="/mypage">
            <Text b style={{ color: '#eaf6ff' }}>
                MyPage
            </Text>
        </Link>
    )
}

export default NavbarMyPage;
