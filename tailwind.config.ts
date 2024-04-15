import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'inner-symmetric': 'inset 0 0px 4px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        wiggle: {
          '0%': { marginRight: 'auto', transition: 'all 1000ms' },
          '100%': {
            marginRight: '0',
          },
          // '0%': { transform: 'translateX(0)' },
          // '100%': {
          //   transform: 'translateX(100px)',
          // },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in both;',
      },
      transitionProperty: {
        margin: 'marginRight',
      },
    },
  },
  plugins: [],
};
export default config;
