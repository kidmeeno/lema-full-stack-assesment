module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'gray-border': '#E9EAEB',
        'primary': '#535862',
        'secondary': '#7F56D9',
        'secondary-bg': '#F9F5FF',
        'primary-dacker': '#181D27',
        'primary-bg': '#334155',
        'red-color': '#F9566A',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        12: '12',
        15: '15',
      },
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
};
