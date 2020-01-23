module.exports = function ({ addComponents }) {
  const components = {
    '.spin-radial': {
      color: '#474E51',
      padding: '15px',
      position: 'relative'
    },

    '@variants responsive, hover': {
      '.spin-radial::before': {
        content: '""',
        position: 'absolute',
        top: '-1px',
        bottom: '-1px',
        right: '-1px',
        left: '-1px',
        backgroundColor: 'currentColor',
        zIndex: '-1',
        borderRadius: '50%',
        transform: 'scale(0)',
        transition: 'transform .3s cubic-bezier(.215,.61,.355,1)'
      },

      '.spin-radial::after': {
        content: '""',
        position: 'absolute',
        top: '-1px',
        bottom: '-1px',
        right: '-1px',
        left: '-1px',
        border: '2px solid currentColor',
        borderRadius: '50%',
        transform: 'scale(1)',
        opacity: '1',
        transition: 'opacity .3s cubic-bezier(.215,.61,.355,1),transform .3s cubic-bezier(.215,.61,.355,1)'
      },

      '.spin-radial:hover::before': {
        transform: 'scale(1)'
      },

      '.spin-radial:hover::after': {
        transform: 'scale(1.2)',
        opacity: '0'
      }
    }
  }

  addComponents(components)
}
