import { styled } from '../../../../stitches.config'

const StyledBanner = styled('a', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  background: '#ff4d00',
  height: '$4',
  fontFamily: '$heading',
  fontSize: '12px',
  lineHeight: 1,
  px: '$2',
  '@bp2': {
    fontSize: '14px'
  }
})

export const Banner = () => {
  return (
    <StyledBanner
      href="https://foundry.basement.studio?ref=grotesque.basement.studio"
      target="_blank"
      rel="noopener"
    >
      <p>
        Want the full font? Check out our newly released BASEMENT&nbsp;FOUNDRY.
      </p>
    </StyledBanner>
  )
}
