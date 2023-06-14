import { useState } from 'react'
import { Link } from '@nextui-org/react'
import step1Image from '../img/ArtiClear&Chrome.png'
import step2Image from '../img/folderCreate.png'
import step3Gif from '../img/5a7375403ba1b148f5ab017710d85331.gif'
import step4Image from '../img/Bookmark.png'

const HowToUse = () => {
    const [hoveredArea, setHoveredArea] = useState(null)

    const renderImage = () => {
        switch (hoveredArea) {
            case 1:
                return <img src={step1Image} alt="Step 1" />
            case 2:
                return <img src={step2Image} alt="Step 2" />
            case 3:
                return <img src={step3Gif} alt="Step 3" />
            case 4:
                return <img src={step4Image} alt="Step 4" />
            default:
                return <img src={step1Image} alt="Step 1" />
        }
    }

    return (
        <div className="py-24 bg-componentBackgroundSelected">
            <div className="flex-col justify-center space-y-24">
                <p className="text-4xl text-center font-semibold">How to Use</p>
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
                    <div className="w-full mx-6 my-auto">{renderImage()}</div>
                </div>
            </div>
            <div className="flex justify-center pt-20 space-x-20">
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
            <p className="text-center text-lg mt-10">
                ※ 本サービスはベータ版です。一部機能はご利用になれません
            </p>
        </div>
    )
}

export default HowToUse
