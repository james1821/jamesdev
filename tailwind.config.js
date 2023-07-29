/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      'HOME-BG': '#1A1A1D',
      'white':'#FFFFFF',
      'skyblue':'#66FCF1',
      'custom-red':'#86C232',
      'secondary':'#4E4E50',
    },
   
  },
  plugins: [],
}