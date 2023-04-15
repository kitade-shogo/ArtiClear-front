const ClearNavbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2">
                <p className="text-4xl font-oswald font-extralight text-white">
                    ArtiClear
                </p>
                <div className="border-2 flex justify-center rounded-3xl px-8 py-2">
                    <p className="text-white text-center">ログイン</p>
                </div>
            </div>
        </>
    )
}

export default ClearNavbar
