/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu, Cantarell,"Open Sans","Helvetica Neue",sans-serif',
      },
      colors: {
        'primary-orange': '#FF5722',
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines":
          "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
        "radial-faded":
          "radial-gradient(circle at bottom center,var(--color),transparent 70%)",
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      fontSize: {
        "10xl": ["10rem", "1.1"],
        "13xl": ["13rem", "1.1"]
      },
      keyframes: {
        "image-rotate": {
          "0%": { transform: "rotateX(35deg)" },
          "25%": { transform: "rotateX(35deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: 0,
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "10%": {
            opacity: 1,
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": {
            opacity: 0.5,
          },
        },
      },
      animation: {
        "image-rotate": "image-rotate 1400ms ease forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
      },
    },
  },
  plugins: [],
}