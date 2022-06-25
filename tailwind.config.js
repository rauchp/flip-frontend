module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add SF Pro Rounded Font as 'sf-pro-rounded'
      fontFamily: {
        "sf-pro-rounded": ["SF Pro Rounded"],
      },
      colors: {
        gray: {
          400: "#F7F8FA",
          500: "#4B4B4B",
        },
        red: {
          500: "#FF0420",
        },
      },
    },
  },
  plugins: [],
};
