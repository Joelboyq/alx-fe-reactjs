module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}", // Paths to all template files
    "./public/index.html",       // Include public HTML files
  ],
  darkMode: 'class', // Can be 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF', // Example of extending the theme
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable 'active' variant for background color
      textColor: ['focus-visible'], // Enable 'focus-visible' variant for text color
    },
  },
  plugins: [],
};

