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

const Bookmarks = () => {
    return (
        <>
            <Spacer y={1} />
            <Container fluid>
                <Grid.Container gap={1} justify="center" className="h-auto">
                    <Grid xs={3}>
                        <MySidebar />
                    </Grid>
                    <Grid xs={8} direction="column" className="h-full">
                        <Text h3> React の記事</Text>
                        <Grid className="overflow-y-scroll" style={{ height: 480}}>
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                            <MyCard />
                        </Grid>
                        <Grid>
                            <Grid.Container gap={1}>
                                <Grid xs={10}>
                                    <Textarea
                                        maxRows={1}
                                        width="100%"
                                        placeholder="ここにURLを入力してください"
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
