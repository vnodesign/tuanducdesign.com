const defaultTheme = require('tailwindcss/defaultTheme')
const svgToDataUri = require('mini-svg-data-uri')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  prefix: 'vno-',
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: ['class', 'html[class~="dark"]'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      borderRadius: {
        xl: 24,
        '2xl': 32,
        full: 1000,
      },
      colors: {
        primary: {
          50: '#F0F2FF',
          100: '#E1E6FF',
          200: '#C3CCFF',
          300: '#A5B1FF',
          400: '#8F9DFF',
          500: '#6A7BFF',
          600: '#4D5BDB',
          700: '#3541B7',
          800: '#212A93',
          900: '#141B7A',
        },
        secondary: {
          50: '#FFF1F4',
          100: '#FFE1E7',
          200: '#FFC3D6',
          300: '#FFA5CB',
          400: '#FF8FC9',
          500: '#FF6AC6',
          600: '#DB4DB3',
          700: '#B7359F',
          800: '#93218A',
          900: '#78147A',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F7F9FC',
          200: '#EDF1F7',
          300: '#E4E9F2',
          400: '#C5CEE0',
          500: '#8F9BB3',
          600: '#58617A',
          700: '#2E3A59',
          800: '#222B45',
          900: '#1A2138',
        },
        success: {
          50: '#F6FBE6',
          100: '#F5FCCC',
          200: '#EAFA9A',
          300: '#D6F266',
          400: '#C0E640',
          500: '#A2D608',
          600: '#86B805',
          700: '#6C9A04',
          800: '#537C02',
          900: '#426601',
        },
        info: {
          50: '#ECFBFE',
          100: '#D8FEFB',
          200: '#B2FEFC',
          300: '#8CF6FC',
          400: '#6FE8FA',
          500: '#40D2F7',
          600: '#2EA6D4',
          700: '#207EB1',
          800: '#145B8F',
          900: '#0C4176',
        },
        warning: {
          50: '#FFF9EB',
          100: '#FFF7D6',
          200: '#FFEDAE',
          300: '#FFE085',
          400: '#FFD367',
          500: '#FFBF35',
          600: '#DB9C26',
          700: '#B77B1A',
          800: '#935D10',
          900: '#7A480A',
        },
        danger: {
          50: '#FFEDEC',
          100: '#FFE7D9',
          200: '#FFCAB3',
          300: '#FFA68D',
          400: '#FF8371',
          500: '#FF4B42',
          600: '#DB3036',
          700: '#B72133',
          800: '#93152E',
          900: '#7A0C2C',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
              '&:hover': {
                borderBottomWidth: '2px',
              },
              'code, strong': {
                color: 'inherit',
                fontWeight: 'inherit',
              },
            },
            h1: {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
              letterSpacing: '-0.025em',
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
              letterSpacing: '-0.025em',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: 0,
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em',
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.slate.300'),
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none',
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.sky.400'),
            },
            'h1, h2, h3, h4, h5, h6, code': {
              color: theme('colors.slate.200'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            strong: {
              color: theme('colors.slate.200'),
            },
            blockquote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontWeight: {
        thin: '200',
      },
      spacing: {
        18: '4.5rem',
        full: '100%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: (theme) => ({
        squiggle: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 3" enable-background="new 0 0 6 3" width="6" height="3" fill="${theme(
            'colors.yellow.400'
          )}"><polygon points="5.5,0 2.5,3 1.1,3 4.1,0"/><polygon points="4,0 6,2 6,0.6 5.4,0"/><polygon points="0,2 1,3 2.4,3 0,0.6"/></svg>`
        )}")`,
      }),
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      )
      addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)')
      addVariant('children', '& > *')
      addVariant('scrollbar', '&::-webkit-scrollbar')
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )

      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      )
    },
  ],
}
