import { Card, Grid, Text, Link, Avatar, Spacer } from '@nextui-org/react'

const MyBoard = () => { 
    return (
        <>
            <Card css={{ p: '$6', mw: '400px' }}>
                <Card.Header>
                    <Grid.Container direction='row' >
                        <Grid xs={1}>
                            <Avatar
                                size="lg"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                color="primary"
                                bordered
                            />
                        </Grid>
                        <Spacer x={2} />
                        <Grid >
                            <Grid.Container direction='column'>
                                <Grid xs={1}><Text b>Name</Text></Grid>
                                <Grid xs={1}>Profile</Grid>
                            </Grid.Container>
                        </Grid>
                        </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: '$2' }}>
                    <Text>
                        Make beautiful websites regardless of your design
                        experience.
                    </Text>
                </Card.Body>
                <Card.Footer>
                    <Link
                        icon
                        color="primary"
                        target="_blank"
                        href="https://github.com/nextui-org/nextui"
                    >
                        Visit source code on GitHub.
                    </Link>
                </Card.Footer>
            </Card>
        </>
    )
}

export default MyBoard;