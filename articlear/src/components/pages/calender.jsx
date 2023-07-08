import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useBookmarkContext } from '../context/BookmarkContext'
import HeatMap from '@uiw/react-heat-map'
import { MdArrowCircleRight, MdDelete, MdCheck, MdClear } from 'react-icons/md'

const Calender = () => {
    const { bookmarks, fetchBookmarks, deleteBookmark } = useBookmarkContext()
    const [value, setValue] = useState([])
    const [selectedDate, setSelectedDate] = useState()
    const [filteredBookmarks, setFilteredBookmarks] = useState([])
    const [confirmDeleteId, setConfirmDeleteId] = useState(null)
    const [tooltip, setTooltip] = useState({
        show: false,
        date: '',
        count: '',
        x: 0,
        y: 0,
    })

    useEffect(() => {
        const fetchData = async () => {
            await fetchBookmarks()

            const bookmarkCounts = bookmarks.reduce((acc, bookmark) => {
                const date = new Date(
                    bookmark.attributes.created_at
                ).toLocaleDateString()
                acc[date] = (acc[date] || 0) + 1
                return acc
            }, {})

            const heatmapValues = Object.entries(bookmarkCounts).map(
                ([date, count]) => ({
                    date,
                    count,
                })
            )

            setValue(heatmapValues)

            if (bookmarks.length > 0) {
                const latestBookmarkDate = new Date(
                    bookmarks[0].attributes.created_at
                ).toLocaleDateString()
                setSelectedDate(latestBookmarkDate)
            }
        }

        fetchData()
        console.log('useEffectCalender')
    }, [])

    useEffect(() => {
        if (selectedDate) {
            const selected = selectedDate
            const filtered = bookmarks.filter((bookmark) => {
                const bookmarkDate = new Date(
                    bookmark.attributes.created_at
                ).toLocaleDateString()
                return bookmarkDate === selected
            })
            setFilteredBookmarks(filtered)
        }
        console.log('ふぃるた')
    }, [selectedDate, bookmarks])

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

    //時刻なし
    const formatDateWithoutTime = (dateString) => {
        let date = new Date(dateString)
        return date.toLocaleString('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
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

    return (
        <>
            <div className="container flex justify-center mt-10 mx-auto space-x-32">
                <div className="w-1/3 hover:cursor-default flex-col space-y-5">
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
                <div className="w-1/2 flex-col space-y-5 h-auto">
                    <p className="ml-2 font-semibold text-3xl">Calender</p>
                    <HeatMap
                        width={650}
                        height={200}
                        value={value}
                        rectSize={15}
                        rectProps={{ rx: 3 }}
                        legendCellSize={15}
                        startDate={new Date('2023/06/01')}
                        panelColors={{
                            0: '#EBEDF0',
                            1: '#a4dff1',
                            2: '#5fd4f4',
                            5: '#0078a1',
                            10: '#003242',
                        }}
                        rectRender={(props, data) => {
                            return (
                                <rect
                                    {...props}
                                    onMouseEnter={(e) => {
                                        const date = new Date(
                                            data.date
                                        ).toLocaleDateString('ja-JP', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit',
                                        })
                                        setTooltip({
                                            show: true,
                                            date,
                                            count: `${data.count || 0}`,
                                            x: e.clientX,
                                            y: e.clientY,
                                        })
                                    }}
                                    onMouseLeave={() => {
                                        setTooltip({ ...tooltip, show: false })
                                    }}
                                    onClick={() => {
                                        setSelectedDate(data.date)
                                    }}
                                />
                            )
                        }}
                    />
                    {tooltip.show && (
                        <div
                            style={{
                                position: 'fixed',
                                top: tooltip.y,
                                left: tooltip.x,
                            }}
                            className="bg-primary text-white p-1 rounded-md"
                        >
                            {tooltip.date}
                            <br />
                            {tooltip.count}件のBookmark
                        </div>
                    )}
                    <p className="ml-2 font-semibold text-3xl">
                        {selectedDate &&
                            formatDateWithoutTime(
                                selectedDate.replace(/\//g, '-')
                            )}{' '}
                        のBookmark
                    </p>
                    <div className="h-72 overflow-y-auto">
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
                                                {bookmark.attributes.title}
                                            </p>
                                            <p className="text-sm font-light text-gray-500 pl-8">
                                                {formatDate(
                                                    bookmark.attributes
                                                        .created_at
                                                )}
                                            </p>
                                        </div>
                                        <p className="text-sm font-light text-gray-500">
                                            {bookmark.attributes.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <Link
                                                to={bookmark.attributes.url}
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
                                {selectedDate &&
                                    formatDateWithoutTime(
                                        selectedDate.replace(/\//g, '-')
                                    )}{' '}
                                にはブックマークはありません
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calender
