import { styled } from '@stitches/react'
import React from 'react'
import { Text } from '.'

const Container = styled('div', {
  marginTop: 50,
  display: 'flex',
  justifyContent: 'space-between',

  '.text': {
    marginLeft: 42
  }
})

type ReleaseProps = {
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
        <Text size="xs" css={{ marginTop: 45 }}>
          {date}
        </Text>
        <Text size="md" css={{ marginTop: 10 }}>
          {text}
        </Text>
      </div>
    </Container>
  )
}

export default Release
