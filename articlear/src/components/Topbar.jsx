import { Navbar, Text, Dropdown, Avatar } from '@nextui-org/react'
import NavbarBoards from './TopbarLink/navbarBoards'
import NavbarBookmarks from './TopbarLink/navbarBookmarks'
import NavbarCalender from './TopbarLink/navbarCalender'

const TopBar = () => {
    return (
        <Navbar variant="sticky" maxWidth="fluid" className='z-10'>
            <div className="w-full flex justify-between items-center mx-24">
                <p className="text-3xl font-oswald">ArtiClear</p>
                <div className="flex justify-center items-center space-x-16 mr-28">
                    <NavbarBookmarks />
                    <NavbarCalender />
                </div>
                <Dropdown placement="bottom-right">
                    <Dropdown.Trigger>
                        <Avatar
                            bordered
                            as="button"
                            color="secondary"
                            size="md"
                            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        />
                    </Dropdown.Trigger>
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
            </div>
        </Navbar>
    )
}

export default TopBar
