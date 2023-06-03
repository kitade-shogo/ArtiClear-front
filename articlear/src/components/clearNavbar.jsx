import LoginModal from './loginModal'

const ClearNavbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-2">
                <p className="text-4xl font-oswald font-extralight text-white">
                    ArtiClear
                </p>
                <LoginModal />
            </div>
        </>
    )
}

export default ClearNavbar
