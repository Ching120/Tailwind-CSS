/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], // 只要 src/**/*.{html,js} 都有更新會觸發 tailwind 編譯
    theme: {
        extend: {},
    },
    plugins: [],
}