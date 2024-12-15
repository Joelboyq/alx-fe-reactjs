/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify the paths to your files
  darkMode: false, // Or 'media' or 'class' based on your needs
  theme: {
    extend: {}, // Extend the default Tailwind theme here if needed
  },
  plugins: [], // Add any Tailwind plugins here if required
};
