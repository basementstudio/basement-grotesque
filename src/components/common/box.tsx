import { styled } from '../../../stitches.config'

const Box = styled('div', {
  variants: {
    centered: {
      true: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }
})

export default Box
