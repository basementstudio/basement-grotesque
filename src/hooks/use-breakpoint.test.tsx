import { useBreakpoint } from './use-breakpoint'
import React, { FC } from 'react'
import { render, screen } from '@testing-library/react'

describe('useBreakpoint test', () => {
  const FakeComponent: FC = () => {
    const breakpoint = useBreakpoint()
    return <span>{breakpoint}</span>
  }

  it('should return initial', () => {
    global.innerWidth = 400
    render(<FakeComponent />)
    expect(screen.getByText('initial')).toBeInTheDocument
  })
  it('should return bp1', () => {
    global.innerWidth = 800
    render(<FakeComponent />)
    expect(screen.getByText('bp1')).toBeInTheDocument
  })
  it('should return bp2', () => {
    global.innerWidth = 1000
    render(<FakeComponent />)
    expect(screen.getByText('bp2')).toBeInTheDocument
  })
  it('should return bp3', () => {
    global.innerWidth = 1400
    render(<FakeComponent />)
    expect(screen.getByText('bp3')).toBeInTheDocument
  })
  it('should return bp4', () => {
    global.innerWidth = 1800
    render(<FakeComponent />)
    expect(screen.getByText('bp4')).toBeInTheDocument
  })
})
