import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        barlow: ['var(--font-barlow)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      flex: {
        70: '0 0 70%',
        75: '0 0 75%',
      },
      colors: {
        primary: {
          DEFAULT: '#FF385C',
        },
        secondary: {
          DEFAULT: '#222222',
        },
        zinc: {
          300: '#B0B0B0',
        },
        dark: {
          DEFAULT: '#222222',
        },
      },
      textColor: {
        slate: '#6a6a6a',
      },
      backgroundColor: {
        white: '#ffffff',
        'gray-200': '#F7F7F7',
        'gray-300': '#EBEBEB',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        '2xl': '22px',
        '4xl': '32px',
        '5xl': '48px',
      },
    },
  },
  plugins: [],
}
export default config
