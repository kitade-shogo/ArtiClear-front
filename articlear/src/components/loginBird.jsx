import { useEffect, useState } from 'react'
import loginImage from './img/login.jpeg'
import spacecatImage from './img/spacecat.jpg'
const LoginBird = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset
            const targetPosition = 376 // 表示させたい位置
            setIsVisible(position >= targetPosition)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div
                className={`transition-opacity duration-700 opacity-0 ${
                    isVisible ? 'opacity-100' : ''
                }`}
            >
                <div
                    className="fixed bottom-24 right-8 h-24 w-48 rounded-xl bg-local bg-cover flex justify-center items-center"
                    style={{ backgroundImage: `url(${loginImage})` }}
                >
                    <p className="text-white text-xl font-bold font-oswald tracking-tight mr-16">
                        Sign Up
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginBird
