import { useState } from 'react'
import {
    MdBookmarkAdd,
    MdOutlineNotificationsActive,
    MdCalendarMonth,
} from 'react-icons/md'
import { Badge, Link } from '@nextui-org/react'
import CheckedSentence from '../checkedSentence'
import LoginModal from '../loginModalWhite'
import PyramidScene from '../pyramid'
import step1Image from '../img/ArtiClear&Chrome.png'
import step2Image from '../img/folderCreate.png'
import step3Gif from '../img/5a7375403ba1b148f5ab017710d85331.gif'
import step4Image from '../img/Bookmark.png'

const Top = () => {
    const [hoveredArea, setHoveredArea] = useState(null)

    const renderImage = () => {
        switch (hoveredArea) {
            case 1:
                return (
                    <img
                        src={step1Image}
                        alt="Step 1"
                    />
                )
            case 2:
                return (
                    <img
                        src={step2Image}
                        alt="Step 2"
                    />
                )
            case 3:
                return (
                    <img
                        src={step3Gif}
                        alt="Step 3"
                    />
                )
            case 4:
                return (
                    <img
                        src={step4Image}
                        alt="Step 4"
                    />
                )
            default:
                return (
                    <img
                        src={step1Image}
                        alt="Step 1"
                    />
                )
        }
    }

    return (
        <>
            <div className="relative h-144 w-screen pl-96 bg-componentBackgroundHover">
                <PyramidScene />
                <p className="absolute top-1/3 left-28 text-5xl font-semibold">
                    「あとで読む」を本当に
                </p>
                <p className="absolute top-1/2 left-40 text-2xl font-medium">
                    ArtiClear はプログラミング学習中の方を
                    <br />
                    サポートするブックマーク管理サービスです
                </p>
            </div>
            <div className="py-24 bg-componentBackgroundNormal">
                <div className="mx-24 flex-col space-y-10">
                    <p className="text-4xl text-center font-semibold">
                        ArtiClear とは
                    </p>
                    <p className="text-xl text-center">
                        「ブラウザで頻繁にブックマークするため整理できていない」
                    </p>
                    <p className="text-xl text-center">
                        「あとで読もうと思っていた記事をそのまま忘れてしまう」
                    </p>
                    <p className="text-xl text-center">
                        ArtiClear
                        は、こうした悩みを解消するブックマークマネージャです
                    </p>
                </div>
            </div>
            <div className="px-24 py-32 bg-componentBackgroundHover">
                <div className="flex-col justify-center space-y-24">
                    <p className="text-4xl text-center font-semibold">
                        ArtiClear の機能
                    </p>
                    <div className="flex justify-between">
                        <Badge
                            color="primary"
                            size="lg"
                            content="BETA"
                            verticalOffset="0"
                        >
                            <div className="flex-cols justify-center bg-componentBackgroundSelected rounded-xl px-4 py-4 w-96">
                                <div className="flex justify-start items-center space-x-4">
                                    <MdBookmarkAdd className="text-7xl text-textLowContrast" />
                                    <p className="text-borderHover font-bold text-3xl ml-2">
                                        Bookmark
                                    </p>
                                </div>
                                <div className="flex-col justify-center items-center mx-2 my-8 space-y-4">
                                    <CheckedSentence
                                        sentence={
                                            '連携したChrome拡張機能を通じてブックマークを登録'
                                        }
                                    />
                                    <CheckedSentence
                                        sentence={
                                            'フォルダの作成・指定によりブックマークを整理'
                                        }
                                    />
                                    <CheckedSentence
                                        sentence={
                                            'ログイン後、読みたい記事にいつでもアクセス可能'
                                        }
                                    />
                                    <div className="flex justify-center">
                                        <Link
                                            href="https://chrome.google.com/webstore/detail/articlear-chromeextension/bflmbecdlbonjancnhafkkpepmfgpkke?hl=ja&authuser=0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="text-white text-center text-lg bg-gradient-to-r to-borderInteractive from-textLowContrast px-8 py-2 rounded-3xl">
                                                拡張機能はこちら
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Badge>
                        <Badge
                            color="warning"
                            size="lg"
                            content="In Progress.."
                            verticalOffset="0"
                        >
                            <div className="flex-cols justify-center bg-componentBackgroundSelected rounded-xl px-4 py-4 w-96">
                                <div className="flex justify-start items-center space-x-4">
                                    <MdCalendarMonth className="text-7xl text-textLowContrast" />
                                    <p className="text-borderHover font-bold text-3xl ml-2">
                                        Calender
                                    </p>
                                </div>
                                <div className="flex-col justify-center items-center mx-2 my-8 space-y-4">
                                    <CheckedSentence
                                        sentence={
                                            'カレンダーでブックマークした時刻を可視化'
                                        }
                                    />
                                    <CheckedSentence
                                        sentence={
                                            'タイムラインで直近のブックマークを確認'
                                        }
                                    />
                                </div>
                            </div>
                        </Badge>
                        <Badge
                            color="warning"
                            size="lg"
                            content="In Progress.."
                            verticalOffset="0"
                        >
                            <div className="flex-cols justify-center bg-componentBackgroundSelected rounded-xl px-4 py-4 w-96">
                                <div className="flex justify-start items-center space-x-4">
                                    <MdOutlineNotificationsActive className="text-7xl text-textLowContrast" />
                                    <p className="text-borderHover font-bold text-3xl ml-2">
                                        Notification
                                    </p>
                                </div>
                                <div className="flex-cols justify-center items-center mx-2 my-8 space-y-4">
                                    <CheckedSentence
                                        sentence={
                                            '拡張機能から「後で読む」記事を登録可能'
                                        }
                                    />
                                    <CheckedSentence
                                        sentence={
                                            '一定期間後、読んでいない記事をリスト化して通知'
                                        }
                                    />
                                    <p>
                                        (
                                        通知機能のご利用にはLINEアカウントの連携が必要です
                                        )
                                    </p>
                                </div>
                            </div>
                        </Badge>
                    </div>
                </div>
            </div>
            <div className="py-24 bg-componentBackgroundSelected">
                <div className="flex-col justify-center space-y-24">
                    <p className="text-4xl text-center font-semibold">
                        How to Use
                    </p>
                    <div className="mx-36 flex justify-between">
                        <div className="flex-col w-full">
                            <div
                                onMouseEnter={() => setHoveredArea(1)}
                                onMouseLeave={() => setHoveredArea(null)}
                                className="hover:bg-border border-y-2 border-sky9 px-4 py-10"
                            >
                                <p className="text-xl font-semibold">
                                    1. 拡張機能のインストール
                                </p>
                                <p>
                                    専用の拡張機能をChromeにインストールします(固定すると快適にご使用いただけます)
                                </p>
                            </div>
                            <div
                                className="hover:bg-border border-b-2 border-sky9 px-4 py-10"
                                onMouseEnter={() => setHoveredArea(2)}
                                onMouseLeave={() => setHoveredArea(null)}
                            >
                                <p className="text-xl font-semibold">
                                    2. ログイン・フォルダ作成
                                </p>
                                <p>
                                    Googleアカウントでログイン後、ブックマークを保存するためのフォルダを作成します
                                    <br />
                                    アプリ本体・拡張機能のどちらからでも作成できます
                                </p>
                            </div>
                            <div
                                className="hover:bg-border border-b-2 border-sky9 px-4 py-10"
                                onMouseEnter={() => setHoveredArea(3)}
                                onMouseLeave={() => setHoveredArea(null)}
                            >
                                <p className="text-xl font-semibold">
                                    3. ブックマーク
                                </p>
                                <p>
                                    ブックマークしたい記事のページで拡張機能を呼び出し、フォルダを指定して保存します
                                </p>
                            </div>
                            <div
                                className="hover:bg-border border-b-2 border-sky9 px-4 py-10"
                                onMouseEnter={() => setHoveredArea(4)}
                                onMouseLeave={() => setHoveredArea(null)}
                            >
                                <p className="text-xl font-semibold">
                                    4. 記事を読む
                                </p>
                                <p>
                                    アプリ本体でいつでもブックマークを確認できます。「READ
                                    ARTICLE」から記事に飛ぶことができます
                                </p>
                            </div>
                        </div>
                        <div className="w-full mx-6 my-auto">
                            {renderImage()}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-20 space-x-20">
                    <LoginModal />
                    <div className="flex justify-center">
                        <Link
                            href="https://chrome.google.com/webstore/detail/articlear-chromeextension/bflmbecdlbonjancnhafkkpepmfgpkke?hl=ja&authuser=0"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="text-white text-center text-lg bg-gradient-to-r to-borderInteractive from-textLowContrast px-8 py-2 rounded-3xl">
                                拡張機能はこちら
                            </p>
                        </Link>
                    </div>
                </div>
                <p className='text-center text-lg mt-10'>※ 本サービスはベータ版です。一部機能はご利用になれません</p>
            </div>
        </>
    )
}

export default Top
