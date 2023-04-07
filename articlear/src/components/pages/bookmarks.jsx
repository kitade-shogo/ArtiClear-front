import {
    Container,
    Grid,
    Text,
    Textarea,
    Button,
    Spacer,
} from '@nextui-org/react'
import MySidebar from '../sidebar'
import MyCard from '../card'
import { useEffect } from 'react'

const Bookmarks = () => {
    return (
        <>
            <Spacer y={1} />
            <Container fluid>
                <Grid.Container gap={1} justify="center">
                    <Grid xs={3}>
                        <MySidebar />
                    </Grid>
                    <Grid xs={8} direction="column">
                        <Text h3> React の記事</Text>
                        <Grid
                            className="overflow-y-scroll"
                            style={{ height: 470 }}
                        >
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                        </Grid>
                        <Spacer y={1} />
                        <Grid>
                            <Grid.Container gap={1}>
                                <Grid xs={10}>
                                    <Textarea
                                        maxRows={1}
                                        width="100%"
                                        labelPlaceholder="URL"
                                    />
                                </Grid>
                                <Grid xs={2}>
                                    <Button flat size="sm" color="primary">
                                        Register
                                    </Button>
                                </Grid>
                            </Grid.Container>
                        </Grid>
                    </Grid>
                    <Spacer xs={1} />
                </Grid.Container>
            </Container>
        </>
    )
}

export default Bookmarks
