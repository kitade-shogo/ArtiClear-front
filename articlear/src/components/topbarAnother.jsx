import React from 'react';
import { Navbar, Badge } from '@nextui-org/react';
import { Link } from 'react-router-dom'; 
import Logo from './img/x.png'
import LoginModalWhite from './loginModalWhite';

const TopbarAnother = () => {

    return (
        <>
            <Navbar variant="sticky" maxWidth="fluid">
                <div className="w-full flex justify-between items-center mx-24">
                    <Badge
                        color="primary"
                        size="md"
                        content="BETA"
                        verticalOffset="50%"
                        horizontalOffset="-20%"
                    >
                        <Link to="/">
                            <img alt="logo" src={Logo} className="w-48" />
                        </Link>
                    </Badge>
                    <LoginModalWhite />
                </div>
            </Navbar>
        </>
    )
}

export default TopbarAnother;
