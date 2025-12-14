import type { Config } from 'tailwindcss'

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      colors: {
        accent: '#3b82f6',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#1a1a1a',
            a: {
              color: '#3b82f6',
              '&:hover': { color: '#2563eb' },
            },
            code: { color: '#1a1a1a', backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.25rem' },
            'code::before': { content: '' },
            'code::after': { content: '' },
            pre: { backgroundColor: '#1f2937', color: '#f3f4f6' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} as any

export default config
