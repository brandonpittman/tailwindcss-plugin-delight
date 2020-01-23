const directions = {
  down: { direction: 'top', axis: 'Y' },
  up: { direction: 'bottom', axis: 'Y' },
  left: { direction: 'right', axis: 'X' },
  right: { direction: 'left', axis: 'X' }
}

var components = {}

module.exports = ({ addComponents, theme }) => {
  for (const [key, value] of Object.entries(directions)) {
    components[`.button-slide-${key}`] = {
      transition: 'color 200ms ease-in-out',
      '&:after': {
        content: '""',
        height: theme('height.full'),
        width: theme('width.full'),
        position: 'absolute',
        backgroundColor: theme('colors.black'),
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        transition: 'transform 200ms ease-in-out',
        transform: `scale${value.axis}(0)`,
        transformOrigin: value.direction,
        zIndex: -1
      },
      '&:hover': {
        color: theme('colors.white')
      },
      '&:hover:after': {
        transform: `scale${value.axis}(1)`
      }
    }
  }

  addComponents(components)
}
