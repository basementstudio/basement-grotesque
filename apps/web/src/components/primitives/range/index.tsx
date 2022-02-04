import { useCallback, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'
import { styled } from '../../../../stitches.config'
import { useCursor } from '../cursor'

import s from './range.module.scss'

const Label = styled('label', {
  display: 'block',
  fontFamily: '$body',
  fontWeight: '500',
  fontSize: '18px',
  '@bp2': {
    fontSize: '24px'
  }
})

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Value = styled('div', {
  fontFamily: '$body',
  fontWeight: '500',
  fontSize: '18px',
  '@bp2': {
    fontSize: '24px'
  }
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
  const [isGrabbing, setIsGrabbing] = useState(false)
  const { setType } = useCursor()

  useEffect(() => {
    setIsMobileSSRSafe(isMobile)
  }, [])

  const handlePointerDown = useCallback(() => {
    setType('grabbing')
    setIsGrabbing(true)
  }, [setType])

  const handlePointerUp = useCallback(() => {
    setType('grab')
    setIsGrabbing(false)
  }, [setType])

  return (
    <div
      style={{
        ['--thumb-width' as string]: isMobileSSRSafe ? '24px' : '18px'
      }}
    >
      <Flex>
        <Label htmlFor={`range-${name}`}>{label}</Label>
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
        id={`range-${name}`}
        onChange={onChange}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        data-cursor={isGrabbing ? 'grabbing' : 'grab'}
      />
    </div>
  )
}

export default Range
