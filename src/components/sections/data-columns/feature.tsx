import { styled } from '../../../../stitches.config'
import { clamp, range } from 'lib/utils'
import { Text } from '.'

const Container = styled('div', {
  borderTop: '1px solid #878787',
  paddingTop: 9,

  '&:first-child': {
    '@bp2': {
      marginTop: 50
    }
  },

  '&:not(:last-child)': {
    paddingBottom: 50
  }
})

const Score = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '.star': {
    color: '$colors$white',
    '&:not(.filled)': {
      opacity: 0.4
    },

    svg: {
      height: 45,
      width: 45,

      '@bp2': {
        width: 60,
        height: 60
      }
    }
  }
})

const Head = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
})

const StarSvg = () => (
  <svg viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30.5 0L32.9222 19.1046L42.9055 2.63686L37.3477 21.075L53.1659 10.0915L40.5892 24.675L59.5072 21.075L42.0861 29.2822L60.8329 33.6881L41.5798 34.1L56.9138 45.75L39.1576 38.2953L48.4275 55.175L35.2385 41.1428L36.8413 60.3335L30.5 42.15L24.1587 60.3335L25.7615 41.1428L12.5725 55.175L21.8424 38.2953L4.08623 45.75L19.4202 34.1L0.167082 33.6881L18.9139 29.2822L1.49278 21.075L20.4108 24.675L7.83408 10.0915L23.6523 21.075L18.0945 2.63686L28.0778 19.1046L30.5 0Z"
      fill="currentColor"
    />
  </svg>
)

type FeatureProps = {
  title: string
  score: number
}

const Feature = ({ title, score }: FeatureProps) => {
  const totalStars = 5
  const filledStars = clamp(score, 0, 5)
  const unfilledStars = totalStars - filledStars

  return (
    <Container>
      <Head>
        <Text size="md" heading>
          {title}
        </Text>
        <Text size="xs">
          {filledStars}/{totalStars}
        </Text>
      </Head>
      <Score css={{ marginTop: 14 }}>
        <Text as="span" size="md" css={{ marginRight: 28 }}>
          ↳
        </Text>
        {range(filledStars).map((idx) => (
          <span className="star filled" key={idx}>
            <StarSvg />
          </span>
        ))}
        {range(unfilledStars).map((idx) => (
          <span className="star" key={filledStars + idx}>
            <StarSvg />
          </span>
        ))}
      </Score>
    </Container>
  )
}

export default Feature
