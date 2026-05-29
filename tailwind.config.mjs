/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        wood: {
          dark: '#2C1810',
          medium: '#8B5E3C',
          light: '#D4A574',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          dark: '#E8DDD0',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
