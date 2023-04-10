import { useState } from 'react'
import { Card, Text, Row, Button, Spacer, Grid, Modal, Input, Textarea } from '@nextui-org/react'

const MyCard = () => {
    const [visible, setVisible] =useState(false)
    const handler = () => setVisible(true)

    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

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
                            <Button size="sm" bordered onPress={handler}>
                                Share
                            </Button>
                            <Modal
                                closeButton
                                aria-labelledby="modal-title"
                                open={visible}
                                onClose={closeHandler}
                            >
                                <Modal.Header>
                                    <Text id="modal-title" size={18}>
                                        Share this Article
                                    </Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Textarea
                                        label='Comment'
                                        placeholder='ここにコメントしてください'
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        auto
                                        flat
                                        color="error"
                                        onPress={closeHandler}
                                    >
                                        Close
                                    </Button>
                                    <Button auto onPress={closeHandler}>
                                        Share
                                    </Button>
                                </Modal.Footer>
                            </Modal>
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
