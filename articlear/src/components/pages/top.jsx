import {
    MdBookmarkAdd,
    MdOutlineNotificationsActive
} from 'react-icons/md'
import CheckedSentence from '../checkedSentence'
import bgImage from '../img/sky.jpeg'
import TopBar from '../topbarAnother'
import LoginModal from '../loginModal'

const Top = () => {
    return (
        <>
            <div
                className="bg-fixed bg-cover flex justify-start items-center h-screen py-32 px-24"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className=" flex-cols justify-center space-y-20">
                    <p className="text-5xl text-white font-semibold">
                        「あとで読む」を本当に
                    </p>
                    <p className="text-2xl text-white font-semibold ml-8">
                        ArtiClear はプログラミング学習中の方を
                        <br />
                        サポートするブックマーク管理サービスです
                    </p>
                    <div className="flex justify-center">
                        <LoginModal />
                    </div>
                </div>
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
                <div className="flex-col justify-center">
                    <div className="flex justify-between">
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
                                    <p className="text-white text-center text-lg bg-gradient-to-r to-borderInteractive from-textLowContrast px-8 py-2 rounded-3xl">
                                        拡張機能はこちら
                                    </p>
                                </div>
                            </div>
                        </div>
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
                                        'ブックマーク時に通知までの期間を指定可能'
                                    }
                                />
                                <CheckedSentence
                                    sentence={'指定した期間後、LINEによる通知'}
                                />
                                <p>
                                    (
                                    通知機能のご利用にはLINEアカウントの連携が必要です
                                    )
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top
