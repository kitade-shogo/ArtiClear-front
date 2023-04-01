/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
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
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
