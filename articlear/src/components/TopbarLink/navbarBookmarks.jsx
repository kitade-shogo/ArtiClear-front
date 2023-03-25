import { useLocation } from "react-router-dom";
import { Navbar } from "@nextui-org/react";

const NavbarBookmarks = () => {
    const path = useLocation().pathname
    
    return path === '/bookmarks' ? (
        <Navbar.Link isActive href="/bookmarks">Bookmarks</Navbar.Link>
    ) : (
        <Navbar.Link href="/bookmarks">Bookmarks</Navbar.Link>
    );
};

export default NavbarBookmarks;