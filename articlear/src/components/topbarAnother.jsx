import React, { useState, useEffect } from 'react';
import ClearNavbar from './clearNavbar';
import WhiteNavbar from './whiteNavbar';

const Topbar = () => {
    const [isWhite, setIsWhite] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset
            const targetPosition = 120 // 表示させたい位置
            setIsWhite(position >= targetPosition)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <>
            {isWhite ? <WhiteNavbar /> : <ClearNavbar />}
        </>
    )
}

export default Topbar;
