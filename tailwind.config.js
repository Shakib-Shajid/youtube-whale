/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        'custom_320': "320px",
        'custom_412': "412px",
        'custom_1080': "1080px",
        'custom_1440': "1440px",
        'custom_1600': "1600px",
      },
    },
  },
  plugins: [require('daisyui'),],
};
