import { useNavigate, Link } from 'react-router-dom'
import { Navbar, Text, Dropdown, User, Badge } from '@nextui-org/react'
import { toast } from 'react-toastify'
import NavbarBookmarks from './TopbarLink/navbarBookmarks'
import NavbarCalender from './TopbarLink/navbarCalender'
import Logo from './img/x.png'
import { useAuthContext } from './context/AuthContext'

const NavBar = () => {
    const navigate = useNavigate()
    const { currentUser, logout } = useAuthContext()
    const logoutHandler = async () => {
        await logout()
        navigate('/')
        toast.success('Logout Successfully')
    }

    return (
        <Navbar variant="sticky" maxWidth="fluid" className="z-10">
            <div className="w-full flex justify-between items-center mx-24">
                <Badge
                    color="primary"
                    size="md"
                    content="BETA"
                    verticalOffset="50%"
                    horizontalOffset="-20%"
                >
                    <Link to="/bookmarks">
                        <img alt="logo" src={Logo} className="w-48" />
                    </Link>
                </Badge>
                <div className="flex justify-center items-center space-x-16">
                    <NavbarBookmarks />
                    <NavbarCalender />
                </div>
                <Dropdown placement="bottom-right">
                    <Dropdown.Trigger>
                        <User
                            name={currentUser.displayName}
                            src={currentUser.photoURL}
                            size="md"
                            bordered
                            color="primary"
                            pointer
                        />
                    </Dropdown.Trigger>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                    >
                        <Dropdown.Item
                            key="profile"
                            css={{ height: '$18' }}
                            textValue="profile"
                        >
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                {currentUser.email}
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="how_to_use"
                            withDivider
                            textValue="how_to_use"
                        >
                            <Link to="/how_to_use">How to Use</Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="terms_of_service"
                            withDivider
                            textValue="terms_of_service"
                        >
                            <Link to="terms_of_service">利用規約</Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="privacy_policy"
                            withDivider
                            textValue="privacy_policy"
                        >
                            <Link to="/privacy_policy">
                                プライバシーポリシー
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item
                            key="logout"
                            withDivider
                            color="error"
                            textValue="logout"
                        >
                            <button onClick={logoutHandler} className="w-full">
                                Logout
                            </button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Navbar>
    )
}

export default NavBar;
