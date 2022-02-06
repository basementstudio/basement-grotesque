import * as React from 'react'

import { useR3fContextDispatch } from '../context'
import { GroupSlot } from './layout/group'

const Renderer = ({
  shadowElement,
  children
}: {
  shadowElement: HTMLElement
  children?: React.ReactNode
}) => {
  return (
    <GroupSlot shadowElement={shadowElement}>
      <mesh>{children}</mesh>
    </GroupSlot>
  )
}

export const R3fMesh = React.memo(
  ({
    children,
    style,
    id,
    ...rest
  }: Omit<JSX.IntrinsicElements['div'], 'ref'>) => {
    const ref = React.useRef<HTMLDivElement>(null)
    const { addChildren } = useR3fContextDispatch()

    React.useEffect(() => {
      if (!ref.current) return
      addChildren({
        key: id ?? 'mesh',
        Renderer: Renderer,
        props: { shadowElement: ref.current, children }
      })
    }, [addChildren, children, id])

    return <div {...rest} style={{ opacity: 0, ...style }} ref={ref} />
  }
)
