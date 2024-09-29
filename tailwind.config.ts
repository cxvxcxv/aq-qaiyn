import type { Config } from 'tailwindcss';

import { COLORS } from './src/constants/color.constants';

const config: Config = {
  darkMode: 'media',
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: COLORS,
    extend: {
      padding: {
        xs: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
      },
      margin: {
        xs: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
      },
      transitionDuration: {
        DEFAULT: '266ms',
      },
    },
  },
  plugins: [],
};
export default config;
