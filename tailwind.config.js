/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans these files for class usage
  ],
  theme: {
    extend: {}, // Use this to customize the default Tailwind theme
  },
  plugins: [], // Add custom plugins here
};
