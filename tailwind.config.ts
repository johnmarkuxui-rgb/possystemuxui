import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0b0b0f',
          glass: 'rgba(255,255,255,0.08)',
          card: 'rgba(255,255,255,0.06)'
        },
        text: {
          DEFAULT: '#f5f7fb',
          muted: '#c7c9d1'
        },
        accent: {
          DEFAULT: '#7c9aff'
        }
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.35)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}

export default config
