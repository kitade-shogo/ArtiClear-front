import {
    Navbar,
    Button,
    Link,
    Text,
    useTheme,
    Dropdown,
    Avatar,
} from '@nextui-org/react'
import NavbarBoards from './TopbarLink/navbarBoards'
import NavbarBookmarks from './TopbarLink/navbarBookmarks'
import NavbarCalender from './TopbarLink/navbarCalender'

const TopBar = () => {
    const { isDark } = useTheme()
    return (
        <Navbar
            variant="sticky"
            height="80px"
            isBordered={isDark}
            maxWidth="md"
        >
            <Navbar.Brand>
                <Text hideIn="xs" size="$3xl" className="font-oswald">
                    ArtiClear
                </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" gap="$20" variant="default">
                <NavbarBookmarks />
                <NavbarCalender />
                <NavbarBoards />
            </Navbar.Content>
            <Navbar.Content>
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="secondary"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                    >
                        <Dropdown.Item key="profile" css={{ height: '$18' }}>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: 'flex' }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">
                            Configurations
                        </Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
        </Navbar>
    )
}

export default TopBar
