import { styled } from '../../../stitches.config'

const StyledSection = styled('div', {
  position: 'relative',
  background: '$white',
  color: '$black',
  my: '-1px',

  '&:last-child': {
    mb: 0
  },

  variants: {
    background: {
      black: {
        background: '$black',
        color: '$white'
      },
      muted: {
        background: '$background',
        color: '$white'
      }
    },
    noMargin: {
      true: {
        my: 0
      }
    }
  }
})

type SectionProps = React.ComponentPropsWithoutRef<typeof StyledSection>

const Section = ({ ...rest }: SectionProps) => {
  return <StyledSection {...rest} data-scroll-section />
}

export default Section
