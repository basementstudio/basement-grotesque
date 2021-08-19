import { styled } from '../../../stitches.config'

const Text = styled('p', {
  fontFamily: '$body',
  color: '$colors$white',

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
        textShadow: `-1px -1px 0 $white,  
          1px -1px 0 $white,
          -1px 1px 0 $white,
           1px 1px 0 $white`,
        color: '$background'
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
