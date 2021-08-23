import { styled } from '../../../stitches.config'
import Box from './box'

const AspectBox = ({
  children,
  ratio,
  className
}: {
  ratio: number
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <Box
      className={className}
      css={{
        position: 'relative',
        width: '100%',
        pb: `${100 / ratio}%`,
        '> div': {
          position: 'absolute',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }}
    >
      <div>{children}</div>
    </Box>
  )
}

export const StyledAspectBox = styled(AspectBox, {})

export default AspectBox
