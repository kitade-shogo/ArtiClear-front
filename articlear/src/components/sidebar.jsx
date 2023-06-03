import AddFolderButton from './addFolderButton'

const Sidebar = ({ folders }) => {

    return (
        <>
            <aside
                id="default-sidebar"
                className="w-64 h-full rounded-lg mt-14"
                aria-label="Sidebar"
            >
                <div className="h-full px-1 py-2 overflow-y-auto">
                    <p className="text-xl font-semibold pl-3">Folders</p>
                    <ul className="space-y-2 font-medium">
                        {folders.map((folder) => {
                            return (
                                <li
                                    key={folder.id}
                                    className="flex  items-center p-2 rounded-lg  hover:bg-componentBackgroundHover"
                                >
                                    {folder.attributes.name}
                                </li>
                            )
                        })}
                        <li className="flex items-center p-2 rounded-lg">
                            <AddFolderButton />
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
