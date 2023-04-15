/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
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
                'my-gray': '#718096',
                primary: '#0072F5',
            },
            height: {
                120: '30rem',
                144: '36rem',
            },
        },
        fontFamily: {
            oswald: ['Oswald', 'sans-serif'],
            yomogi: ['Yomogi', 'cursive'],
            babes: ['Babes', 'cursive'],
        },
    },
    plugins: [require('flowbite/plugin')],
}
