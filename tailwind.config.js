/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
        colors: {
            primary: '#202430',
            violet: '#7F84FF',
            neutral: '#C7D2FF',
            button: '#35356475'
        },
        extend: {
            borderRadius: {
                button: '8px',
            },
            backgroundImage: {
                'button-gradient': 'linear-gradient(87deg, #5A80FD 5.03%, #683DD2 93.84%)'
            },
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}
