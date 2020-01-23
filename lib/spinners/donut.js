module.exports = function ({ addComponents }) {
  addComponents({
    '@keyframes donut-spin': {
      '0%': {
        transform: 'rotate(0deg)'
      },
      '100%': {
        transform: 'rotate(360deg)'
      }
    },
    '@variants responsive, hover': {
      '.spin-donut': {
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '2rem',
        width: '2rem',
        '&:hover': {
          cursor: 'not-allowed',
          outline: 0,
          overflow: 'hidden'
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          border: '4px solid currentColor',
          opacity: 0.5,
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          animation: 'donut-spin 1.2s linear infinite'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          border: '4px solid transparent',
          borderLeftColor: 'currentColor',
          borderRadius: '50%',
          width: '100%',
          height: '100%',
          animation: 'donut-spin 1.2s linear infinite'
        }
      }
    }
  })
}
