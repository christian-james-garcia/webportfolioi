/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        editorial: {
          bg: 'var(--color-bg)',
          bgAlt: 'var(--color-bg-alt)',
          surface: 'var(--color-surface)',
          ink: 'var(--color-ink)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
          accent: 'var(--color-accent)',
          accentSoft: 'var(--color-accent-soft)',
          accentHover: 'var(--color-accent-hover)',
        }
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(36, 29, 20, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(36, 29, 20, 0.08)',
        'soft-xl': '0 20px 40px -8px rgba(36, 29, 20, 0.12)',
        'dark-soft': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'dark-lg': '0 10px 30px -4px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
