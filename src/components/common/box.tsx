import { styled } from '@stitches/react'

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
