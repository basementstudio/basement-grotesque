// Lib
import { Tweet as TweetType } from 'lib/twitter'

// Primitives
import Section from 'components/layout/section'
import TextPrimitive from 'components/common/text'

// Local Components
import Feature from './feature'
import Release, { ReleaseProps } from './release'
import Tweet from './tweet'

// Styles
import { styled } from '../../../../stitches.config'
import Box from 'components/common/box'
import { useState } from 'react'
import Container from 'components/layout/container'
import NativeScrollContainer from 'components/common/native-scroll-container'

const SectionInner = styled('div', {
  background: '$background',
  borderTop: '1px solid $white',
  borderBottom: '1px solid $white',

  '@bp3': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }
})

const Column = styled(NativeScrollContainer, {
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  padding: '42px 0',

  '@bp3': {
    maxHeight: 900,
    padding: '74px 40px',

    '&:not(:first-child)': {
      borderLeft: '1px solid $white'
    }
  }
})

export const Text = styled(TextPrimitive, {
  variants: {
    size: {
      xs: {
        fontSize: '$3'
      },
      md: {
        fontSize: '$6',
        letterSpacing: -1
      },
      lg: {
        fontSize: '$9'
      },
      xl: {
        fontSize: '$14',
        lineHeight: 1
      },
      icon: {
        fontSize: '$7'
      }
    }
  }
})

const SectionPicker = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  select: {
    flex: 1,
    textTransform: 'uppercase',
    background: '$background',
    width: '100%',
    fontSize: '$6',
    padding: '15px 0',
    '-webkit-appearance': 'none'
  },

  option: {
    textTransform: 'uppercase'
  },

  svg: {
    position: 'absolute',
    right: 0
  }
})

type DataColumnsProps = {
  tweets: TweetType[]
  releases: ReleaseProps[]
}

type Sections = 'releases' | 'features' | 'tweets'

const DataColumns = ({ tweets, releases }: DataColumnsProps) => {
  const [activeSection, setActiveSection] = useState<Sections>('releases')

  return (
    <Section background="muted">
      <Container maxWidth>
        <SectionInner
          css={{
            display: 'none',

            '@bp3': {
              display: 'grid'
            }
          }}
        >
          <Column>
            <Text css={{ fontSize: '$3' }} uppercase>
              July 30, 2021
            </Text>
            <Text css={{ fontSize: '$7' }} heading uppercase>
              Version History
            </Text>
            <div>
              {releases.map(({ date, text, version }, idx) => (
                <Release version={version} date={date} text={text} key={idx} />
              ))}
            </div>
          </Column>
          <Column>
            <Text css={{ fontSize: '$3' }} uppercase>
              Stats
            </Text>
            <Text css={{ fontSize: '$7' }} heading uppercase>
              Features status
            </Text>
            <div>
              <Feature title="Family styles" score={1} />
              <Feature title="Character set" score={4} />
              <Feature title="Spacing &amp; Kerning" score={3} />
              <Feature title="Hinting" score={4} />
            </div>
          </Column>
          <Column>
            <Text css={{ fontSize: '$3' }} uppercase>
              #BASEMENTGROTESQUE
            </Text>
            <Text css={{ fontSize: '$7' }} heading uppercase>
              Tweets
            </Text>
            <div>
              {tweets.map((tweet) => (
                <Tweet tweet={tweet} key={tweet.id} />
              ))}
            </div>
          </Column>
        </SectionInner>
        <SectionInner
          css={{
            '@bp3': {
              display: 'none'
            }
          }}
        >
          <Box>
            <Container css={{ borderBottom: '1px solid $white' }}>
              <SectionPicker>
                <select
                  onChange={(e) => {
                    setActiveSection(e.target.value as Sections)
                  }}
                >
                  {[
                    { key: 'releases', label: 'Version History' },
                    { key: 'features', label: 'Feature Status' },
                    { key: 'tweets', label: 'Tweets' }
                  ].map(({ key, label }) => (
                    <option value={key} key={key}>
                      {label}
                    </option>
                  ))}
                </select>
                <svg
                  width="20"
                  height="13"
                  viewBox="0 0 20 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L10 10.5L19 1.5"
                    stroke="white"
                    strokeWidth="2.5"
                  />
                </svg>
              </SectionPicker>
            </Container>
          </Box>
          <Container>
            <Column
              css={{ display: activeSection === 'releases' ? 'block' : 'none' }}
            >
              {releases.map(({ date, text, version }, idx) => (
                <Release version={version} date={date} text={text} key={idx} />
              ))}
            </Column>
            <Column
              css={{ display: activeSection === 'features' ? 'block' : 'none' }}
            >
              <Feature title="Family styles" score={1} />
              <Feature title="Character set" score={4} />
              <Feature title="Spacing &amp; Kerning" score={3} />
              <Feature title="Hinting" score={4} />
            </Column>
            <Column
              css={{ display: activeSection === 'tweets' ? 'block' : 'none' }}
            >
              {tweets.map((tweet) => (
                <Tweet tweet={tweet} key={tweet.id} />
              ))}
            </Column>
          </Container>
        </SectionInner>
      </Container>
    </Section>
  )
}

export default DataColumns
