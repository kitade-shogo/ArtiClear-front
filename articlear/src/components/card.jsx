import { Card, Text, Row, Button, Spacer, Grid } from '@nextui-org/react'

const MyCard = () => {
    return (
        <>
            <Spacer y={1} />
            <Card isHoverable variant="flat" className="h-auto">
                <Card.Body className="bg-background2">
                    <Grid.Container gap={1}>
                        <Grid xs={3}>
                            <img
                                src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                className="w-60"
                            />
                        </Grid>
                        <Spacer x={1} />
                        <Grid xs={8} direction="column">
                            <Text b className="text-3xl">
                                Title of Website
                            </Text>
                            <Text>Fisrt sentence of the website....</Text>
                        </Grid>
                        <Row justify="flex-end">
                            <Button size="sm" bordered>
                                Share
                            </Button>
                            <Spacer x={1} />
                            <Button flat size="sm" color="primary">
                                Go to Website
                            </Button>
                        </Row>
                    </Grid.Container>
                </Card.Body>
            </Card>
        </>
    )
}

export default MyCard
