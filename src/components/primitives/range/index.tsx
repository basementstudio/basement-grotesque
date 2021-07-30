import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { styled } from '../../../../stitches.config'

import s from './range.module.scss'

const Label = styled('label', {
  display: 'block',
  fontFamily: '$sans',
  fontSize: '$6',
  fontWeight: '500'
})

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Value = styled('div', {
  fontFamily: '$sans',
  fontSize: '$6',
  fontWeight: '500'
})

export type RangeProps = {
  label: string
  name: string
  min: number
  max: number
  step: number
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  renderValue: (value: string) => React.ReactNode
}

const Range = ({
  label,
  name,
  onChange,
  min,
  max,
  step,
  value,
  renderValue
}: RangeProps) => {
  const [isMobileSSRSafe, setIsMobileSSRSafe] = useState(false)
  useEffect(() => {
    setIsMobileSSRSafe(isMobile)
  }, [])

  return (
    <div
      style={{
        // @ts-ignore
        '--thumb-width': isMobileSSRSafe ? '24px' : '18px'
      }}
    >
      <Flex>
        <Label>{label}</Label>
        <Value>{renderValue(value)}</Value>
      </Flex>
      <input
        type="range"
        className={s.range}
        min={min}
        max={max}
        step={step}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  )
}

export default Range
