import { useState } from 'react'
import { Button, Modal, Text, Input } from '@nextui-org/react'
import axios from 'axios'
import { useAuthContext } from './context/AuthContext'

const AddFolderButton = () => {
    const [visible, setVisible] = useState(false)
    const [folderName, setFolderName] = useState('')

    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
    }
    const { currentUser } = useAuthContext()

    //tokenを取得する関数
    const setToken = async () => {
        const token = await currentUser?.getIdToken()
        const config = {
            headers: { authorization: `Bearer ${token}` },
        }
        return config
    }

    const addHandler = async () => {
        //バックエンドにフォルダーを追加する関数
        const addFolder = async (config) => {
            try {
                await axios.post(
                    'http://localhost:3300/api/v1/folders',
                    { name: folderName },
                    config
                )
                setFolderName('')
                setVisible(false)
            } catch (err) {
                console.log(err)
            }
        }

        //tokenを取得してからaddFolderを実行する関数
        const postFolder = async () => {
            const config = await setToken()
            addFolder(config)
        }
        postFolder()
    }
    return (
        <>
            <Button ghost auto onPress={handler}>
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
                        aria-labelledby="Folder Name"
                        value={folderName}
                        onChange={(e) => setFolderName(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onPress={closeHandler}>
                        Close
                    </Button>
                    <Button auto onPress={addHandler}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddFolderButton
