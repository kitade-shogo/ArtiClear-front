import React from 'react'
import {
    Navbar,
    Button,
    Link,
    Text,
    useTheme,
} from '@nextui-org/react'

const Topbarp = () => {
    const { isDark } = useTheme()

    return (
            <Navbar isBordered={isDark} variant="sticky">
                <Navbar.Brand>
                    <Text b color="inherit" hideIn="xs">
                        ACME
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    activeColor="default"
                    hideIn="xs"
                    variant="default"
                >
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">
                        Customers
                    </Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button
                            auto
                            flat
                            as={Link}
                            color="default"
                            href="#"
                        >
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
    )
}

export default Topbarp;