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
      'primary-bg': '#1A1A1D',
      'white':'#FFFFFF',
      'skyblue':'#66FCF1',
      'primary':'#86C232',
      'secondary':'#4E4E50',
    },
    screens:{
      'lg':'1020px',
      'md':'768px',
      'sm':'320px'
    }
    
   
  },
  plugins: [],
}