import { Navbar, Text, Dropdown, Avatar } from '@nextui-org/react'
import NavbarBoards from './TopbarLink/navbarBoards'
import NavbarBookmarks from './TopbarLink/navbarBookmarks'
import NavbarCalender from './TopbarLink/navbarCalender'

const TopBar2 = () => {
    return (
        <div className="drop-shadow-2xl">
            <div className="h-16 flex justify-center items-center">
                <div>
                    <p className="text-3xl font-oswald">ArtiClear</p>
                </div>
                <div className="flex justify-center items-center space-x-20">
                    <NavbarBookmarks />
                    <NavbarCalender />
                    <NavbarBoards />
                </div>
                <div>
                    <Dropdown placement="bottom-right">
                        <div>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="secondary"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </div>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="secondary"
                        >
                            <Dropdown.Item
                                key="profile"
                                css={{ height: '$18' }}
                            >
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
                            <Dropdown.Item
                                key="logout"
                                withDivider
                                color="error"
                            >
                                Log Out
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
        </div>
    )
}

export default TopBar2
