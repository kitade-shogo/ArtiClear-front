import { useState } from 'react'
import { Button, Modal, Text, Input } from '@nextui-org/react'

const Sidebar = () => {
    const [visible, setVisible] = useState(false)
    const handler = () => setVisible(true)

    const closeHandler = () => {
        setVisible(false)
        console.log('closed')
    }

    return (
        <>
            <aside
                id="default-sidebar"
                className="w-64 h-full bg-componentBackgroundNormal rounded-lg mt-14"
                aria-label="Sidebar"
            >
                <div className="h-full px-1 py-2 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li className="flex justify-center items-center p-2 rounded-lg  hover:bg-componentBackgroundSelected">
                            <p>React</p>
                        </li>
                        <li className="flex justify-center items-center p-2 rounded-lg  hover:bg-componentBackgroundSelected">
                            <p>React</p>
                        </li>
                        <li className="flex justify-center items-center p-2 rounded-lg  hover:bg-componentBackgroundSelected">
                            <p>React</p>
                        </li>
                        <li className="flex justify-center items-center p-2 rounded-lg  hover:bg-componentBackgroundSelected">
                            <p>React</p>
                        </li>
                        <li className="flex justify-center items-center p-2 rounded-lg">
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
                                        New
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
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
