import type { Config } from 'tailwindcss';

export default {
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
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: 'var(--border)',
          light: '#F0F0F0',
          dark: '#2E2E2E',
        },
        primary: {
          light: {
            300: '#EAE3E3',
            200: '#733D47',
            100: '#F2D8D5',
            _000: '#FFFFFF',
          },
          dark: {
            300: '#404040',
            200: '#4B9FFF',
            100: '#F2D8D5',
            _000: '#000000',
          },
        },
        text: {
          light: {
            h1_body: '#111111',
            h2: '#414141',
            h3_captions: '#717171',
            subtext: '#909090',
            disabled: '#D1D1D1',
            outline: '#414141',
          },
          dark: {
            h1_body: '#FFFFFF',
            h2: '#E1E1E1',
            h3_captions: '#C1C1C1',
            subtext: '#B1B1B1',
            disabled: '#414141',
            outline: '#E1E1E1',
          },
        },
        backgrounds: {
          light: {
            e000: '#FFFFFF',
            e100: '#F4F4F4',
            e200: '#F7F7F7',
            e300: '#EFEFEF',
            e400: '#FAFAFA',
          },
          dark: {
            e000: '#000000',
            e100: '#101010',
            e200: '#202020',
            e300: '#171717',
            e400: '#171717',
          },
        },
        borders: {
          light: {
            e100: '#F0F0F0',
          },
          dark: {
            e100: '#2E2E2E',
          },
        },
        red: {
          e000: '#E63535',
          e100: '#FF3B3B',
          e200: '#FF5C5C',
          e300: '#FF8080',
          e400: '#FFE6E6',
          outline: '#FF3B3B',
        },
        green: {
          e000: '#05A660',
          e100: '#06c270',
          e200: '#39D98A',
          e300: '#57EBA1',
          e400: '#E3FFF1',
          outline: '#06C270',
        },
        blue: {
          e000: '#004FC4',
          e100: '#0063F7',
          e200: '#5B8DEF',
          e300: '#9DBFF9',
          e400: '#E5F0FF',
          outline: '#0063F7',
        },
        yellow: {
          e000: '#E6B800',
          e100: '#FFCC00',
          e200: '#FDDD48',
          e300: '#FDED72',
          e400: '#FFFEE6',
          outline: '#FFCC00',
        },
        orange: {
          e000: '#E67A00',
          e100: '#EF8800',
          e200: '#FDAC42',
          e300: '#FCCC75',
          e400: '#FFF8E6',
          outline: '#FF8800',
        },
        teal: {
          e000: '#00B7C4',
          e100: '#00CFDE',
          e200: '#73DFE7',
          e300: '#A9EFF2',
          e400: '#E6FFFF',
          outline: '#00CFDE',
        },
        purple: {
          e000: '#4D0099',
          e100: '#6600CC',
          e200: '#AC5DD9',
          e300: '#DDA5E9',
          e400: '#FFE6FF',
          outline: '#6600CC',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
