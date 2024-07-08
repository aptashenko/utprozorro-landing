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
                'button-gradient': 'linear-gradient(87deg, #5A80FD 5.03%, #683DD2 93.84%)',
                gift: 'linear-gradient(339deg, #EA46D4 -11.22%, #4443CB 49.16%, #202430 107.74%)',
                'neutral-gradient': 'linear-gradient(125deg, rgba(32, 36, 48, 0.06) 0%, rgba(178, 98, 255, 0.06) 100%)',
            },
            boxShadow: {
                'faq-box': '0px 5px 16px 0px rgba(8, 15, 52, 0.06)'
            }
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}
