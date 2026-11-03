/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#17324D',
          dark: '#10263D',
          heading: '#142C43',
        },
        teal: {
          DEFAULT: '#188B8E',
          light: '#EAF5F4',
          dark: '#126A6D',
        },
        gold: {
          DEFAULT: '#B99A65',
          light: '#D4BA88',
        },
        neutral: {
          offwhite: '#F7F9FA',
          border: '#E5EAEE',
          body: '#536273',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 38, 61, 0.04)',
        'card': '0 8px 30px rgba(16, 38, 61, 0.06)',
        'elevated': '0 20px 40px -15px rgba(16, 38, 61, 0.08)',
      }
    },
  },
  plugins: [],
};

