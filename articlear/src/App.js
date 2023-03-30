import { createTheme, NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterConfig from './config/RouterConfig'
import TopBar from './components/Topbar'

const theme = createTheme({
    type: 'dark', // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            background1: '#0c1820',
            background2: '#071d2a',
            componentBackgroundNormal: '#082636',
            componentBackgroundHover: '#082d41',
            componentBackgroundSelected: '#08354c',
            border: '#083e59',
            borderInteractive: '#064b6b',
            borderHover: '#005d85',
            blue9: '#68ddfd',
            blue10: '#8ae8ff',
            textLowContrast: '#2ec8ee',
            textHighContrast: '#eaf8ff',

            // you can also create your own color
            myColor: '#ff4ecd',

            // ...  more colors
            background: '',
        },
        space: {},
        fonts: {},
    },
})

function App() {
    return (
        <>
            <NextUIProvider theme={theme}>
                <BrowserRouter>
                    <TopBar />
                    <RouterConfig />
                </BrowserRouter>
            </NextUIProvider>
        </>
    )
}

export default App
