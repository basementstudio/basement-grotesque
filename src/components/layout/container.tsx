import { styled } from '../../../stitches.config'

const Container = styled('div', {
  padding: '0 28px',
  position: 'relative',

  '@bp2': {
    padding: '0 40px'
  },

  variants: {
    maxWidth: {
      true: {
        mx: 'auto',
        maxWidth: '1800px'
      }
    },
    autoPy: {
      true: {
        py: 88,
        '@bp2': {
          py: 128
        }
      }
    },
    withoutPx: {
      true: {
        padding: '0',
        '@bp2': {
          padding: '0'
        }
      }
    }
  }
})

export default Container
