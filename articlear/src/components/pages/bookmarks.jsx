import { Container, Text } from "@nextui-org/react";
import MySidebar from "../sidebar";

const Bookmarks = () => {
    return (
        <>
            <Container className="bg-background1">
                <Text h1>Bookmarks</Text>
                <MySidebar />
            </Container>
        </>
    );
};

export default Bookmarks;
