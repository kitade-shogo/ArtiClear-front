import LoginModalWhite from "./loginModalWhite"

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
                <LoginModalWhite />
            </div>
        </>
    )
}

export default WhiteNavbar
