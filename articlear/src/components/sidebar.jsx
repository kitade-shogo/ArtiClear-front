import { useState } from 'react'
import { useFolderContext } from './context/FolderContext'
import AddFolderButton from './addFolderButton'
import {
    MdFolderOpen,
    MdFolder,
    MdDelete,
    MdCheck,
    MdClear,
} from 'react-icons/md'

const Sidebar = ({ folders, selectFolder, selectedFolder }) => {
    const [confirmDelete, setConfirmDelete] = useState(false)
    const { deleteFolder } = useFolderContext()

    const handleDeleteFolder = async (folderID) => {
        try {
            await deleteFolder(folderID)
            setConfirmDelete(false)
        } catch (error) {
            console.error('Failed to delete folder: ', error)
        }
    }

    return (
        <>
            <aside
                id="default-sidebar"
                className="w-64 h-full rounded-lg"
                aria-label="Sidebar"
            >
                <div className="h-full px-1 py-2 overflow-y-auto">
                    <p className="text-2xl font-semibold mb-2">Folders</p>
                    {folders.map((folder) => {
                        const isSelected =
                            selectedFolder && folder.id === selectedFolder.id
                        return (
                            <div
                                key={folder.id}
                                className={`flex border-l-2 justify-between items-center p-2 rounded-none  hover:bg-gray-200 hover:cursor-pointer ${
                                    isSelected
                                        ? 'border-sky10 font-semibold text-sky10'
                                        : ''
                                }`}
                                onClick={() => selectFolder(folder)}
                            >
                                <div className="flex justify-between items-center">
                                    {isSelected ? (
                                        <MdFolder className="mr-2" />
                                    ) : (
                                        <MdFolderOpen className="mr-2" />
                                    )}
                                    {folder.attributes.name}
                                </div>
                                {isSelected ? (
                                    confirmDelete ? (
                                        <div className="flex space-x-2">
                                            <MdCheck
                                                onClick={() =>
                                                    handleDeleteFolder(
                                                        folder.id
                                                    )
                                                }
                                            />
                                            <MdClear
                                                onClick={() =>
                                                    setConfirmDelete(false)
                                                }
                                            />
                                        </div>
                                    ) : (
                                        <MdDelete
                                            onClick={() =>
                                                setConfirmDelete(true)
                                            }
                                        />
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                        )
                    })}
                    <AddFolderButton />
                </div>
            </aside>
        </>
    )
}

export default Sidebar
