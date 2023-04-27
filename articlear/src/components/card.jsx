import { useState, useEffect } from 'react'
import { Text, Button, Modal, Textarea } from '@nextui-org/react'
import axios from 'axios'

const MyCard = () => {
    const [visible, setVisible] = useState(false)

    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

    return (
        <>
            <div className="w-11/12 border-t-2 px-8 py-6 bg-white hover:bg-componentBackgroundNormal">
                <div className="flex justify-between">
                    <div>
                        <p className="text-2xl font-semibold underline">
                            Title of Website
                        </p>
                        <Text>Fisrt sentence of the website....</Text>
                    </div>
                    <div className="flex space-x-4">
                        <img
                            src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                            alt="NextUI"
                            className="w-40"
                        />
                        <div className="flex-cols justify-center space-y-5">
                            <Button size="sm" flat onPress={handler}>
                                Share
                            </Button>
                            <Button size="sm" ghost color="error">
                                Delete
                            </Button>
                        </div>
                    </div>
                </div>
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
                            label="Comment"
                            placeholder="ここにコメントしてください"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button auto flat color="error" onPress={closeHandler}>
                            Close
                        </Button>
                        <Button auto onPress={closeHandler}>
                            Share
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default MyCard
