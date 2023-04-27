import { Link} from 'react-router-dom'

const WhiteNavbar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 bg-componentBackgroundNormal w-full flex justify-between items-center px-4 py-2">
                <div className="flex ">
                    <p className="text-4xl font-oswald font-extralight">Arti</p>
                    <p className="text-4xl font-oswald font-extralight text-textLowContrast">
                        Clear
                    </p>
                </div>
                <Link to="/bookmarks">
                    <div className="bg-gradient-to-r to-borderInteractive from-textLowContrast flex justify-center rounded-3xl px-8 py-2">
                        <p className="text-white text-center">ログイン</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default WhiteNavbar
