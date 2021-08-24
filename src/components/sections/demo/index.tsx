import { Fragment, useCallback, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { DURATION, gsap } from 'lib/gsap'

// Primitives
import Range, { RangeProps } from 'components/primitives/range'
import ResizableTextarea from 'components/primitives/resizable-textarea'
import Section from 'components/layout/section'

// Pages
import { useAppContext } from 'pages/_app'

// Styles
import { css, styled } from '../../../../stitches.config'
import SectionHeading from 'components/common/section-heading'
import Box from 'components/common/box'
import Container from 'components/layout/container'

const InputsContainer = styled('div', {
  display: 'grid',
  gap: '$4',
  mt: '48px'
})

const PreviewContainer = styled('div', {
  mt: '64px',
  background: '$background',
  px: '24px',
  pt: '32px',
  '@bp1': {
    px: '38px'
  }
})

const PreviewLabel = styled('div', {
  color: '$white',
  fontFamily: '$body',
  fontSize: '14px'
})

type Value = Omit<RangeProps, 'onChange' | 'name'>
type Name = 'size' | 'tracking' | 'leading'

type Inputs = Record<Name, Value>

const textareaCss = css({
  background: '$background',
  mt: '24px'
})()

const DemoSection = () => {
  const { fontsLoaded } = useAppContext()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [inputs, setInputs] = useState<Inputs>({
    size: {
      label: 'Size',
      value: '108',
      min: 21,
      max: 195,
      step: 1,
      renderValue: (value) => value + 'PX'
    },
    tracking: {
      label: 'Tracking',
      value: '-2',
      min: -4,
      max: 4,
      step: 0.1,
      renderValue: (value) => value + 'px'
    },
    leading: {
      label: 'Leading',
      value: '110',
      min: 83,
      max: 140,
      step: 1,
      renderValue: (value) => value + '%'
    }
  })
  const [text, setText] = useState('We Make Cool Shit That Performs')

  const handleChange: RangeProps['onChange'] = useCallback((e) => {
    const { name, value } = e.target
    const key = name as Name
    setInputs((p) => {
      return { ...p, [key]: { ...p[key], value } }
    })
  }, [])

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> =
    useCallback((e) => {
      setText(e.target.value)
    }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setInputs((p) => ({
          ...p,
          tracking: { ...p.tracking, value: '0.4' },
          size: { ...p.size, min: 14, max: 100, value: '32' }
        }))
      } else {
        setInputs((p) => ({
          ...p,
          size: { ...p.size, min: 21, max: 195, value: '108' }
        }))
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    gsap.set('.demo__section', {
      autoAlpha: 0
    })
  }, [])

  useEffect(() => {
    if (!inView) return

    const items = document?.querySelector('.demo__section')?.childNodes

    if (!items) return

    const tl = gsap.timeline({
      paused: true,
      smoothChildTiming: true
    })
    tl.to('.demo__section', {
      autoAlpha: 1,
      duration: DURATION / 2
    })
    tl.from(items, {
      autoAlpha: 0,
      y: 30,
      stagger: 0.1
    })

    tl.play()

    return () => {
      tl.kill()
    }
  }, [inView])

  return (
    <Section
      background="black"
      css={{
        py: 88,
        '@bp2': {
          zIndex: 10,
          py: 128
        }
      }}
    >
      <Container withoutPx maxWidth ref={ref}>
        <Container className="demo__section">
          <SectionHeading
            title={<>Try this beauty&nbsp;:)</>}
            subtitle={
              <Box
                as="span"
                css={{ display: 'none', '@bp2': { display: 'inline' } }}
              >
                Handcrafted
                <br />
                for strong designs
              </Box>
            }
          />
          <Container
            css={{
              display: 'none',
              '@bp2': {
                display: 'block'
              }
            }}
            withoutPx
          >
            <PreviewContainer>
              <PreviewLabel>
                <p>
                  {Object.keys(inputs).map((key, i, { length }) => {
                    const isLast = i === length - 1
                    const input = inputs[key as Name]
                    return (
                      <Fragment key={i}>
                        {input.label[0]}: {input.renderValue(input.value)}
                        {isLast ? null : ' | '}
                      </Fragment>
                    )
                  })}
                </p>
                <ResizableTextarea
                  value={text}
                  className={textareaCss}
                  style={{
                    fontSize: inputs.size.value + 'px',
                    lineHeight: inputs.leading.value + '%',
                    letterSpacing: inputs.tracking.value + 'px',
                    fontFamily: 'var(--fonts-heading)'
                  }}
                  onChange={handleTextChange}
                  fontsLoaded={fontsLoaded}
                />
              </PreviewLabel>
            </PreviewContainer>
          </Container>
          <Box css={{ '@bp2': { display: 'none' } }}>
            <PreviewContainer>
              <PreviewLabel>
                <p>
                  {Object.keys(inputs).map((key, i, { length }) => {
                    const isLast = i === length - 1
                    const input = inputs[key as Name]
                    return (
                      <Fragment key={i}>
                        {input.label[0]}: {input.renderValue(input.value)}
                        {isLast ? null : ' | '}
                      </Fragment>
                    )
                  })}
                </p>
                <ResizableTextarea
                  value={text}
                  className={textareaCss}
                  style={{
                    fontSize: inputs.size.value + 'px',
                    lineHeight: inputs.leading.value + '%',
                    letterSpacing: inputs.tracking.value + 'px',
                    fontFamily: 'var(--fonts-heading)'
                  }}
                  onChange={handleTextChange}
                  fontsLoaded={fontsLoaded}
                />
              </PreviewLabel>
            </PreviewContainer>
          </Box>
          <InputsContainer>
            {Object.keys(inputs).map((key) => {
              return (
                <Range
                  {...inputs[key as Name]}
                  name={key}
                  key={key}
                  onChange={handleChange}
                />
              )
            })}
          </InputsContainer>
        </Container>
      </Container>
    </Section>
  )
}

export default DemoSection
