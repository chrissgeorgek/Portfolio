/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        // exact pixel sizes used across the project
        '380': '380px',
        '430': '430px',
        '500': '500px',
      },
      borderRadius: {
        '30': '30px',
        '40': '40px',
      },
      blur: {
        '100': '100px',
        '120': '120px',
        '140': '140px',
      },
    },
  },
  plugins: [],
};
