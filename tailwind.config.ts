import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      'body-bg': 'var(--color-body-bg)',
      'card-bg': 'var(--color-card-bg)',
      'card-border': 'var(--color-card-border)',
      'card-text': 'var(--color-card-text)',
      'card-door': 'var(--color-card-door)',
      'board-text': 'var(--color-board-text)',
    },
    fontFamily: {
      nunito: 'var(--font-nunito)',
    },
    extend: {
      borderWidth: {
        card: 'var(--border-card)',
      },
    },
    borderRadius: {
      card: 'var(--rounded-card)',
      pick: 'var(--rounded-pick)',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
