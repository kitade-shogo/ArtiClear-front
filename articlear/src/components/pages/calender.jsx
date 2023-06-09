import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useBookmarkContext } from '../context/BookmarkContext'

const Calender = () => {
    const { bookmarks, fetchBookmarks } = useBookmarkContext()

    useEffect(() => {
        fetchBookmarks()
        console.log('useEffect3実行')
    }, [])

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

    return (
        <>
            <div className="w-1/3 hover:cursor-default m-5">
                <p className="ml-2 font-semibold text-3xl">TimeLine</p>
                <ul className="relative h-144 overflow-y-auto">
                    <div className="border-l border-gray-200 ml-2">
                        {bookmarks.map((bookmark) => {
                            return (
                                <li className="ml-4" key={bookmark.id}>
                                    <div className="absolute w-3 h-3 bg-borderHover rounded-full mt-1.5 left-1 border border-white"></div>
                                    <time className="mb-1 font-normal text-borderHover">
                                        {formatDate(
                                            bookmark.attributes.created_at
                                        )}
                                    </time>
                                    <Link
                                        to={bookmark.attributes.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                {bookmark.attributes.title}
                                            </h3>
                                        </div>
                                    </Link>
                                    <p className="mb-4 text-sm font-normal text-gray-500">
                                        {bookmark.attributes.description}
                                    </p>
                                </li>
                            )
                        })}
                    </div>
                </ul>
            </div>
        </>
    )
}

export default Calender
