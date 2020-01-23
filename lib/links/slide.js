const directions = {
  // down: { direction: 'top', axis: 'Y' },
  // up: { direction: 'bottom', axis: 'Y' },
  left: { direction: 'right', axis: 'X' },
  right: { direction: 'left', axis: 'X' }
}

var components = {}

module.exports = ({ addComponents, theme }) => {
  for (const [key, value] of Object.entries(directions)) {
    components[`.link-slide-${key}`] = {
      transition: 'color 200ms ease-in-out',
      position: 'relative',
      '&:after': {
        content: '""',
        height: theme('spacing.px'),
        width: theme('width.full'),
        position: 'absolute',
        backgroundColor: 'currentColor',
        bottom: 0,
        left: 0,
        right: 0,
        transition: 'transform 200ms ease-in-out',
        transform: `scale${value.axis}(0)`,
        transformOrigin: value.direction,
        zIndex: -1
      },
      '&:hover:after': {
        transform: `scale${value.axis}(1)`
      }
    }
  }

  addComponents(components)
}
