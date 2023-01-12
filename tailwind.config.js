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
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
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
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
            },
            h3: {
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em',
            },
            code: {
              color: theme('colors.slate.50'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
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
            'h2, h3, h4, code': {
              color: theme('colors.slate.200'),
            },
            hr: {
              borderColor: theme('colors.slate.200'),
              opacity: '0.05',
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
