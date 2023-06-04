import { Link } from 'react-router-dom' 

const MyFooter = () => {
    return (
        <>
            <footer className="bottom-0 left-0 z-20 w-full p-4 bg-componentBackgroundSelected md:flex md:items-center md:justify-between md:p-6 ">
                <span className="text-sm text-gray-500 sm:text-center">
                    © 2023{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        ArtiClear™
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex items-center mt-3 text-sm font-medium text-gray-500  sm:mt-0">
                    <li>
                        <Link
                            to="/privacy_policy"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            プライバシーポリシー
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="terms_of_service"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            利用規約
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default MyFooter