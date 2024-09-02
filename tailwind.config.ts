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
    debugScreens: {
      style: {
        fontSize: '1.5rem',
        backgroundColor: '#FFB114',
        color: '#251a03',
      },
    },
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
      'dice-bg': 'var(--color-dice-bg)',
      'chip-bg': 'var(--color-chip-bg)',
      'dices-bg': 'var(--color-dice-bg)',
      'button-bg': 'var(--color-button-bg)',
      'button-text': 'var(--color-button-text)',
    },
    fontFamily: {
      nunito: 'var(--font-nunito)',
    },
    extend: {
      borderWidth: {
        card: 'var(--border-card)',
      },
      spacing: {
        'dice-chip': 'var(--spacing-dice-chip)',
        'chip-size': 'var(--spacing-chip-size)',
      },
      ringColor: {
        'dice-ring-color-other': 'var(--color-dice-ring-other)',
        'dice-ring-color-stealthy': 'var(--color-dice-ring-stealthy)',
      },
    },
    borderRadius: {
      card: 'var(--rounded-card)',
      pick: 'var(--rounded-pick)',
      dices: 'var(--rounded-dices)',
      dice: 'var(--rounded-dice)',
      button: 'var(--rounded-button)',
      full: '9999px',
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-debug-screens'),
  ],
} satisfies Config

export default config
