import { styled } from '../../../stitches.config'

const Text = styled('p', {
  fontFamily: '$body',

  variants: {
    centered: {
      true: {
        textAlign: 'center'
      }
    },
    heading: {
      true: {
        fontFamily: '$heading'
      }
    },
    uppercase: {
      true: {
        textTransform: 'uppercase'
      }
    },
    outlined: {
      true: {
        '-webkit-text-fill-color': 'transparent',
        '-webkit-text-stroke': '1px white'
      }
    },
    tight: {
      true: {
        letterSpacing: -2
      }
    }
  }
})

export default Text
