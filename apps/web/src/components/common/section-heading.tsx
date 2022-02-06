import Box from './box'
import Text from './text'

const SectionHeading = ({
  title,
  subtitle
}: {
  title: React.ReactNode
  subtitle: React.ReactNode
}) => {
  return (
    <Box
      css={{
        alignItems: 'center',
        justifyContent: 'space-between',

        '@bp1': {
          display: 'flex'
        }
      }}
    >
      <Text
        as="h2"
        css={{
          fontSize: '32px',
          fontWeight: 500,
          lineHeight: 1
        }}
        heading
        uppercase
      >
        {title}
      </Text>
      <Text
        as="p"
        css={{
          fontWeight: 500,
          mt: '32px',
          '@bp1': {
            textAlign: 'right',
            mt: '0'
          }
        }}
        uppercase
      >
        {subtitle}
      </Text>
    </Box>
  )
}

export default SectionHeading
