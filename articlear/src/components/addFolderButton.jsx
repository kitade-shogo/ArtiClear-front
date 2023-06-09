import { useState, useContext } from 'react'
import { Button, Modal, Text } from '@nextui-org/react'
import { FolderContext } from './pages/bookmarks'
import { useForm } from 'react-hook-form'
import { useFolderContext } from './context/FolderContext'

const AddFolderButton = () => {
    const [visible, setVisible] = useState(false)

    const { onFolderAdded } = useContext(FolderContext)
    const { addFolder } = useFolderContext()
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm()

    const handleFolderNameChange = (e) => {
        setValue('folderName', e.target.value)
    }

    const handler = () => setVisible(true)
    const closeHandler = () => {
        setVisible(false)
    }

    const addHandler = async (data) => {
        await addFolder(data)
        await onFolderAdded()
        reset()
        setVisible(false)
    }

    return (
        <>
            <button
                onClick={handler}
                className="px-2 py-1 mt-4 rounded-lg text-white bg-textLowContrast"
            >
                Create New Folder
            </button>
            <Modal
                closeButton
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Create New Folder
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(addHandler)}>
                        <input
                            id="folderName"
                            {...register('folderName', {
                                required: true,
                                minLength: 1,
                                maxLength: 30,
                            })}
                            onChange={handleFolderNameChange}
                            className="border-2 border-border hover:border-primary rounded-xl w-full h-12 px-3"
                        />
                        {errors.folderName &&
                            errors.folderName.type === 'required' && (
                                <p className="text-rose-500">
                                    フォルダ名は必須です。
                                </p>
                            )}
                        {errors.folderName &&
                            errors.folderName.type === 'minLength' && (
                                <p className="text-rose-500">
                                    フォルダ名は1文字以上で入力してください。
                                </p>
                            )}
                        {errors.folderName &&
                            errors.folderName.type === 'maxLength' && (
                                <p className="text-rose-500">
                                    フォルダ名は30文字以下で入力してください。
                                </p>
                            )}
                        <div className="flex justify-end space-x-2 mt-3">
                            <button
                                type="submit"
                                className="bg-primary text-white px-4 py-2 rounded-xl"
                            >
                                Create
                            </button>
                            <Button
                                auto
                                flat
                                color="error"
                                onPress={closeHandler}
                            >
                                Close
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddFolderButton
