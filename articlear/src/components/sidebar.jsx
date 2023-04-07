import { useState } from 'react'
import { Button, Modal, Text, Input } from '@nextui-org/react'
import { Sidebar } from 'flowbite-react'

const MySidebar = () => {
    const [visible, setVisible] = useState(false)
    const handler = () => setVisible(true)

    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

    return (
        <>
            <Sidebar aria-label="Default sidebar example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#">Ruby</Sidebar.Item>
                        <Sidebar.Item href="#" label="15">
                            Rails
                        </Sidebar.Item>
                        <Sidebar.Item href="#" label="3">
                            JavaScript
                        </Sidebar.Item>
                        <Sidebar.Item href="#">React</Sidebar.Item>
                        <Sidebar.Item href="#">Next</Sidebar.Item>
                        <Sidebar.Item href="#">Python</Sidebar.Item>
                        <Sidebar.Item>
                            <Button flat auto onPress={handler}>
                                Add New Folder
                            </Button>
                            <Modal
                                closeButton
                                aria-labelledby="modal-title"
                                open={visible}
                                onClose={closeHandler}
                            >
                                <Modal.Header>
                                    <Text id="modal-title" size={18}>
                                        New Folder
                                    </Text>
                                </Modal.Header>
                                <Modal.Body>
                                    <Input
                                        clearable
                                        bordered
                                        fullWidth
                                        color="primary"
                                        size="lg"
                                        placeholder="Folder Name"
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
                                        Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </>
    )
}

export default MySidebar
