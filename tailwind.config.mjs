/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center:true,
		padding:"15px"
	},
	screens:{
		sm:"640px",
		md:"768px",
		lg:"960px",
		xl:"1200px",
	}, fontFamily:{
		primary:"var(--font-jetbrainsMono)",
	},
	
  	extend: {
  		colors: {
  			primary:'#012A4A',
			primarybg: "linear-gradient(to bottom, #a1c4fd, #c2e9fb, #4facfe);",
			accent:{
				DEFAULT: '#1e88e5',
				hover: '#1e88e5',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
