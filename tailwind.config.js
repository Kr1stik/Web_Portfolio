/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        'neon-green': '#1ed760',
        'dark-bg': '#0a0a0a',
        'dark-card': '#0c0c0e',
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(30, 215, 96, 0.35)',
        'neon-bar': '0 0 10px #1ed760',
      }
    },
  },
  plugins: [],
}
