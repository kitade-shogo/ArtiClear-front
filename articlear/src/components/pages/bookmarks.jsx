import { useState, useEffect, createContext } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../sidebar'
import { useAuthContext } from '../context/AuthContext'
import { useFolderContext } from '../context/FolderContext'
import { MdArrowCircleRight, MdDelete, MdCheck, MdClear } from 'react-icons/md'
import { useBookmarkContext } from '../context/BookmarkContext'

export const FolderContext = createContext()

const Bookmarks = () => {
    const [confirmDeleteId, setConfirmDeleteId] = useState(null)
    const { currentUser } = useAuthContext()

    const { folders, selectedFolder, setSelectedFolder, fetchFolders } =
        useFolderContext()

    const {
        bookmarks,
        filteredBookmarks,
        setFilteredBookmarks,
        fetchBookmarks,
        deleteBookmark,
    } = useBookmarkContext()

    // フォルダが追加された時に呼び出される関数。BEから追加されたフォルダを含めて再取得している
    const handleFolderAdded = async () => {
        await fetchFolders()
    }

    // Sidebarで選択されたフォルダを検知するための関数
    const selectFolder = (p) => {
        setSelectedFolder(p)
        console.log(selectedFolder)
    }

    // 選択されているフォルダの中にあるBookmarksをfilterする関数
    const filterBookmark = () => {
        const filteredBookmark = bookmarks.filter((bookmark) => {
            return bookmark.relationships.folder.data.id === selectedFolder.id
        })
        setFilteredBookmarks(filteredBookmark)
    }

    // ブックマークを削除した時に呼び出される関数
    const handleDeleteBookmark = async (bookmarkId) => {
        try {
            await deleteBookmark(bookmarkId)
            setConfirmDeleteId(null)
        } catch (error) {
            console.log('Failed to delete bookmark: ', error)
        }
    }

    // BEから取得してきたBookmarkの日時の情報を読みやすいように変換する関数
    const formatDate = (dateString) => {
        let date = new Date(dateString)
        return date.toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    useEffect(() => {
        fetchFolders()
        fetchBookmarks()
    }, [currentUser])

    useEffect(() => {
        filterBookmark()
    }, [selectedFolder,bookmarks])

    return (
        <>
            <FolderContext.Provider
                value={{ onFolderAdded: handleFolderAdded }}
            >
                <div className="container flex justfy-center mx-24 py-8 space-x-4">
                    <Sidebar
                        folders={folders}
                        selectFolder={selectFolder}
                        selectedFolder={selectedFolder}
                    />
                    <div className="w-full space-y-4 mt-4">
                        {folders.length === 0 ? (
                            <p className="text-3xl">
                                Welcom to Articlear! <br />
                                Start with creating a folder !!
                            </p>
                        ) : (
                            <div>
                                <p className="text-3xl font-medium">
                                    {selectedFolder &&
                                        selectedFolder.attributes.name}{' '}
                                    のBookmark
                                </p>
                                <div className="flex-cols h-144 overflow-y-auto mt-6">
                                    {filteredBookmarks.length !== 0 ? (
                                        filteredBookmarks.map((bookmark) => {
                                            const isDeleting =
                                                bookmark.id === confirmDeleteId
                                            return (
                                                <div
                                                    className="px-4 py-4 w-full border-2 border-border rounded-xl flex-col space-y-2 bg-background2 hover:bg-gradient-to-r from-componentBackgroundSelected to-background1 mb-2 hover:cursor-default"
                                                    key={bookmark.id}
                                                >
                                                    <div className="flex items-center">
                                                        <p className="text-xl font-medium">
                                                            {
                                                                bookmark
                                                                    .attributes
                                                                    .title
                                                            }
                                                        </p>
                                                        <p className="text-sm font-light text-gray-500 pl-8">
                                                            {formatDate(
                                                                bookmark
                                                                    .attributes
                                                                    .created_at
                                                            )}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm font-light text-gray-500">
                                                        {
                                                            bookmark.attributes
                                                                .description
                                                        }
                                                    </p>
                                                    <div className="flex justify-between items-center">
                                                        <Link
                                                            to={
                                                                bookmark
                                                                    .attributes
                                                                    .url
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <div className="inline-flex items-center border border-textLowContrast mt-2 px-2 py-1 rounded-md text-textLowContrast">
                                                                <p className="pr-1">
                                                                    READ ARTICLE
                                                                </p>
                                                                <MdArrowCircleRight />
                                                            </div>
                                                        </Link>
                                                        <div
                                                            key={bookmark.id}
                                                            className="text-textLowContrast"
                                                        >
                                                            {isDeleting ? (
                                                                <div className="flex space-x-2">
                                                                    <MdCheck
                                                                        className="text-2xl"
                                                                        onClick={() =>
                                                                            handleDeleteBookmark(
                                                                                bookmark.id
                                                                            )
                                                                        }
                                                                    />
                                                                    <MdClear
                                                                        className="text-2xl"
                                                                        onClick={() =>
                                                                            setConfirmDeleteId(
                                                                                null
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <MdDelete
                                                                    className="text-2xl"
                                                                    onClick={() =>
                                                                        setConfirmDeleteId(
                                                                            bookmark.id
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <p>
                                            {selectedFolder &&
                                                selectedFolder.attributes.name}
                                            にはブックマークはありません
                                        </p>
                                    )}
                                </div>{' '}
                            </div>
                        )}
                    </div>
                </div>
            </FolderContext.Provider>
        </>
    )
}

export default Bookmarks
