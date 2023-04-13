import bgImage from '../img/TOP.jpeg'

const Top = () => {
    return (
        <>
            <div
                className="bg-local bg-cover h-120 flex-col justify-center py-20 px-24"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <p className="text-center text-6xl text-white font-semibold">
                    技術記事の「積読」を解消する
                    <br />
                    ブックマークマネージャ
                </p>
                <p className="text-center text-3xl mt-10 text-white font-semibold">
                    ArtiClearはプログラミング学習中の方を
                    <br />
                    後押しする技術記事管理・共有サービスです
                </p>
            </div>
            <div className="mx-24 py-24">
                <div className="flex-col justify-center">
                    <div className="flex justify-between mt-44">
                        <div className="flex-cols justify-center">
                            <div className="border-4 border-border py-2 w-36 mx-auto text-center rounded-lg">
                                <p className="text-borderHover font-bold">
                                    Bookmark
                                </p>
                            </div>
                            <p className="mt-10">
                                専用のChrome拡張機能を通じてブックマークを登録
                            </p>
                        </div>
                        <div className="flex-cols justify-center">
                            <div className="border-4 border-border py-2 w-36 mx-auto text-center rounded-lg">
                                <p className="text-borderHover font-bold">
                                    Notification
                                </p>
                            </div>
                            <p className="mt-10">
                                ブックマーク登録時に設定する一定期間後に通知
                            </p>
                        </div>
                        <div className="flex-cols justify-center">
                            <div className="border-4 border-border py-2 w-36 mx-auto text-center rounded-lg">
                                <p className="text-borderHover font-bold">
                                    Share
                                </p>
                            </div>
                            <p className="mt-10">
                                掲示板で他のユーザーとブックマークを共有
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-24 bg-componentBackgroundNormal ">
                <div className="mx-24 flex-col space-y-10">
                    <p className="text-4xl text-center">
                        こんな経験、ございませんか
                    </p>
                    <p className="text-xl text-center">
                        頻繁にブラウジングし、よくブックマークするけど量が多くなりそのままにしている
                    </p>
                    <p className="text-xl text-center">
                        あとで読もうと思っていた記事をそのまま忘れてしまう
                    </p>
                    <p className="text-xl text-center">
                        ArtiClearはこうしたブックマークの「積読」を解消するサービスです
                    </p>
                </div>
            </div>
            <div className="h-24 w-60 fixed left-10 bottom-10 bg-gradient-to-r to-borderInteractive from-textLowContrast flex justify-center rounded-xl">
                <p className="text-white text-center font-bold my-auto">
                    新規登録・ログインはこちら
                </p>
            </div>
        </>
    )
}

export default Top
