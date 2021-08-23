import { styled } from '../../../../stitches.config'
import React from 'react'
import { Text } from '.'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

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
  date: string
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
          css={{ fontSize: '$2', marginTop: 45, '@bp2': { fontSize: '$3' } }}
        >
          {date}
        </Text>
        <Text
          css={{
            fontSize: 16,
            lineHeight: 1.6,
            marginTop: 10
          }}
        >
          {text}
        </Text>
      </div>
    </Container>
  )
}

export default Release
