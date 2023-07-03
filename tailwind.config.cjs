/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    corePlugins: {
        preflight: false
    },
    content: [  "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            margin: {
                "50px": "50px"
            },
            colors: {
                gre: "#2fa968",
                bcor: "#06b6d4",
                slider: "#b1d788",
                link: "#409eff",
                dblue:"#0076f6",
                dgray:"#f1f2f3",
                darkBg:"#101010"
            },
            height:{
                "70vh" : '70vh'
            }
        },
        screens: {
            xs: "500px",
            sm: "768px",
            md: "950px",
            lg: "1400px",
            xl: "1920px"
        }
    },
    plugins: []
}
