/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwriting: ['YourCursiveFont', 'cursive'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1598519102179-6547728a67b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D')",
        
      }
    },
  },
  plugins: [],
}

