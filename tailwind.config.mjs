/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Assistant', 'Arial', 'sans-serif'],
        heading: ['Heebo', 'Arial', 'sans-serif'],
      },
      colors: {
        // Investment Navy - Primary Brand Palette
        brand: {
          50: '#F4F7FA',
          100: '#E5ECF3',
          200: '#C4D3E3',
          300: '#8FAAC6',
          400: '#5F82A8',
          500: '#3D648A',
          600: '#325372',
          700: '#27415A',
          800: '#1C2F42',
          900: '#121E2B',
        },
        // Gold Accent
        accent: {
          DEFAULT: '#C9A227',
          dark: '#A68420',
        },
        // Semantic Colors
        dark: '#1C2024',
        surface: '#F5F7FA',
        border: '#D1D5DC',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};
