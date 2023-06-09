import { createTheme, NextUIProvider } from '@nextui-org/react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouterConfig from './config/RouterConfig'
import MyFooter from './components/footer'
import { AuthContextProvider } from './components/context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FolderContextProvider } from './components/context/FolderContext'
import { BookmarkContextProvider } from './components/context/BookmarkContext'

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
        fonts: { oswald: ['Oswald', 'sans-serif'] },
    },
})

function App() {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <NextUIProvider theme={theme}>
                <AuthContextProvider>
                    <FolderContextProvider>
                        <BookmarkContextProvider>
                            <Router>
                                <RouterConfig />
                                <MyFooter />
                            </Router>
                        </BookmarkContextProvider>
                    </FolderContextProvider>
                </AuthContextProvider>
            </NextUIProvider>
        </>
    )
}

export default App
