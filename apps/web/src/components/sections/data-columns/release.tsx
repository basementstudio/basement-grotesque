import { styled } from '../../../../stitches.config'
import { Text } from '.'
import { formatDate } from 'lib/utils/date'

const Container = styled('div', {
  display: 'flex',

  '&:first-child': {
    '@bp2': {
      marginTop: 50
    }
  },

  '&:not(:last-child)': {
    paddingBottom: 50
  },

  '.text': {
    marginLeft: 42
  }
})

export type ReleaseProps = {
  version: string
  date: Date
  text: string
}

const Release = ({ version, date, text }: ReleaseProps) => {
  return (
    <Container>
      <div>
        <Text size="md" heading>
          {version}
        </Text>
        <Text size="md" css={{ marginTop: 14 }}>
          ↳
        </Text>
      </div>
      <div className="text">
        <Text
          css={{
            fontSize: 16,
            lineHeight: 1.6,
            marginTop: 56
          }}
        >
          {text}
        </Text>
        <Text css={{ marginTop: 10, opacity: '50%', fontSize: 14 }}>
          {formatDate(date)}
        </Text>
      </div>
    </Container>
  )
}

export default Release
