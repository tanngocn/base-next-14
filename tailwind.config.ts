import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '640px',
      tablet: '960px',
      desktop: '1200px',
      extra_desktop: '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-one': 'linear-gradient(180deg, rgba(120, 156, 233, 0) 0%, #D6E3FF 100%)',
        'image-1': "url('./assets/images/bg-iron-out.png')",
      },
      colors: {
        primary: 'rgba(20,39,86,1)',
        blue: 'rgba(213,223,239,1)',
        blueOne: 'rgba(213,223,239,1)',
        blueTwo: 'rgba(90,135,198,1)',
        white: '#fff',
        whiteOne: 'rgba(244,240,233,1)',
        whiteTwo: 'rgba(251,251,251,1)',
        black: '#000',
        gray: '#f4f0e9',
        pink: '#ffc0cb',
        text: '#1A2F5A',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        mobile: '2rem',
        tablet: '4rem',
        desktop: '5rem',
        extra_desktop: '6rem',
      },
      screens: {
        mobile: '600px',
        tablet: '900px',
        desktop: '1200px',
        extra_desktop: '1536px',
      },
    },
  },

  darkMode: 'class',

  plugins: [],
};
export default config;
