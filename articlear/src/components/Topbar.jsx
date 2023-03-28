import { Navbar, Button, Link, Text, useTheme } from '@nextui-org/react'
import NavbarBoards from './TopbarLink/navbarBoards';
import NavbarBookmarks from './TopbarLink/navbarBookmarks';
import NavbarCalender from './TopbarLink/navbarCalender';
import NavbarMyPage from './TopbarLink/navbarMyPage';

const TopBar = () => {
    const { isDark } = useTheme();

    return (
        <Navbar
            isBordered={isDark}
            variant="sticky"
            height="120px"
            maxWidth="fluid"
        >
            <Navbar.Brand>
                <Text b hideIn="xs" size="$3xl">
                    ArtiClear
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                hideIn="xs"
                variant="default"
                gap="$20"
            >
                <NavbarBookmarks />
                <NavbarCalender />
                <NavbarBoards />
                <NavbarMyPage />
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link href="#">Login</Navbar.Link>
                <Navbar.Item>
                    <Button auto as={Link} bordered="true" href="#">
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}

export default TopBar
