/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans these files for class usage
  ],
  theme: {
    extend: {}, // Use this to customize the default Tailwind theme
  },
  plugins: [], // Add custom plugins here

  darkMode: 'class', // Use 'class' to toggle dark mode with a class
  
  theme: {
    extend: {
      backgroundColor: ['active'], // Enables the 'active' variant for background color
    },
  },
  
  
};

