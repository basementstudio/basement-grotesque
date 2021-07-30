import Range, { RangeProps } from 'components/primitives/range'
import { useCallback, useState } from 'react'
import { styled } from '../../../../stitches.config'

const Section = styled('section', {
  background: 'white',
  zIndex: '10',
  position: 'relative',
  px: '40px',
  py: '128px'
})

const InputsContainer = styled('div', {
  display: 'grid',
  gap: '$4'
})

const PreviewContainer = styled('div', {
  mt: '64px',
  background: 'black',
  px: '38px',
  py: '32px'
})

const PreviewLabel = styled('div', {
  color: 'white',
  fontFamily: '$sans'
})

const PreviewText = styled('h3', {
  color: 'white',
  fontFamily: '$heading'
})

type Value = Omit<RangeProps, 'onChange' | 'name'>
type Name = 'size' | 'tracking' | 'leading'

type Inputs = Record<Name, Value>

const DemoSection = () => {
  const [inputs, setInputs] = useState<Inputs>({
    size: {
      label: 'Size',
      value: '115',
      min: 12,
      max: 256,
      step: 1,
      renderValue: (value) => value + 'PX'
    },
    tracking: {
      label: 'Tracking',
      value: '-2',
      min: -4,
      max: 10,
      step: 0.1,
      renderValue: (value) => value + 'px'
    },
    leading: {
      label: 'Leading',
      value: '110',
      min: 83,
      max: 200,
      step: 1,
      renderValue: (value) => value + '%'
    }
  })

  const handleChange: RangeProps['onChange'] = useCallback((e) => {
    const { name, value } = e.target
    const key = name as Name
    setInputs((p) => {
      return { ...p, [key]: { ...p[key], value } }
    })
  }, [])

  return (
    <Section>
      <div>
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
        <PreviewContainer>
          <PreviewLabel>
            {Object.keys(inputs).map((key, i, { length }) => {
              const isLast = i === length - 1
              const input = inputs[key as Name]
              return (
                <>
                  {input.label[0]}: {input.renderValue(input.value)}
                  {isLast ? null : ' | '}
                </>
              )
            })}
            <PreviewText
              style={{
                fontSize: inputs.size.value + 'px',
                lineHeight: inputs.leading.value + '%',
                letterSpacing: inputs.tracking.value + 'px'
              }}
            >
              We Make Cool Shit That Performs
            </PreviewText>
          </PreviewLabel>
        </PreviewContainer>
      </div>
    </Section>
  )
}

export default DemoSection
