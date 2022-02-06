import * as React from 'react'

import { R3fCanvas } from './canvas'

type Child<Props extends Record<string, unknown>> = {
  props: Props
  Renderer: (props: Props) => JSX.Element
  key: string
}

type ChildWithoutKey<P extends Record<string, unknown>> = Omit<Child<P>, 'key'>

const r3fContext = React.createContext<
  | {
      children: Record<string, ChildWithoutKey<Record<string, unknown>>>
      cameraRef: React.MutableRefObject<THREE.Camera | undefined>
      sceneRef: React.MutableRefObject<THREE.Scene | undefined>
      canvasRef: React.MutableRefObject<HTMLCanvasElement | null>
    }
  | undefined
>(undefined)
const r3fContextDispatch = React.createContext<
  | {
      addChildren: <P extends Record<string, unknown>>(
        child: Child<P> | Record<string, ChildWithoutKey<P>>
      ) => void
    }
  | undefined
>(undefined)

export const R3fContextProvider: React.FC = ({
  children: contextConsumers
}) => {
  const [children, setChildren] = React.useState<
    Record<string, ChildWithoutKey<any>>
  >({})
  const cameraRef = React.useRef<THREE.Camera>()
  const sceneRef = React.useRef<THREE.Scene>()
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  const addChildren = React.useCallback(function addChildren<
    P extends Record<string, unknown>
  >(child: Child<P> | Record<string, ChildWithoutKey<P>>) {
    const newChildren = (
      typeof child.key === 'string' ? { [child.key]: child } : child
    ) as Record<string, ChildWithoutKey<P>>

    return setChildren((prevChildren) => ({ ...prevChildren, ...newChildren }))
  },
  [])

  return (
    <r3fContext.Provider value={{ children, cameraRef, sceneRef, canvasRef }}>
      <r3fContextDispatch.Provider value={{ addChildren }}>
        <R3fCanvas />
        {contextConsumers}
      </r3fContextDispatch.Provider>
    </r3fContext.Provider>
  )
}

export const useR3fContext = () => {
  const context = React.useContext(r3fContext)
  if (context === undefined) {
    throw new Error('useR3fContext must be used within a R3fContextProvider')
  }
  return context
}

export const useR3fContextDispatch = () => {
  const context = React.useContext(r3fContextDispatch)
  if (context === undefined) {
    throw new Error(
      'useR3fContextDispatch must be used within a R3fContextProvider'
    )
  }
  return context
}
