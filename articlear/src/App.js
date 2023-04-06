import { createTheme, NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouterConfig from './config/RouterConfig'
import TopBar from './components/Topbar'
import MyFooter from './components/footer'
import Topbarp from './components/topbarproto'

const theme = createTheme({
    type: 'light', // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            background1: '#f9feff',
            background2: '#f1fcff',
            componentBackgroundNormal: '#e4f9ff',
            componentBackgroundHover: '#d5f4fd',
            componentBackgroundSelected: '#c1ecf9',
            border: '#a4dff1',
            borderInteractive: '#79cfea',
            borderHover: '#2ebde5',
            sky9: '#68ddfd',
            sky10: '#5fd4f4',
            textLowContrast: '#0078a1',
            textHighContrast: '#003242',
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
                    <MyFooter />
                </BrowserRouter>
            </NextUIProvider>
        </>
    )
}

export default App
