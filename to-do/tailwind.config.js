/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          custom: '0 4px 6px rgba(128, 117, 117, 0.3)', 
        },
      },
    },
    plugins: [],
  }