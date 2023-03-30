import { useLocation, Link } from "react-router-dom";
import { Text } from "@nextui-org/react";

const NavbarBookmarks = () => {
    const path = useLocation().pathname
    
    return path === '/bookmarks' ? (
        <Link to="/bookmarks">
            <Text b css={{ color: '$textLowContrast' }}>
                Bookmarks
            </Text>
        </Link>
    ) : (
        <Link to="/bookmarks">
            <Text b style={{ color: '#eaf6ff' }}>
                Bookmarks
            </Text>
        </Link>
    )
};

export default NavbarBookmarks;