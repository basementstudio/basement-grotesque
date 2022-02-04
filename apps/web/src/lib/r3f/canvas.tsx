import { Canvas } from '@react-three/fiber'
import { EventHandler } from 'locomotive-scroll'
import * as React from 'react'

import Portal from 'components/primitives/portal'
import { locoLerp, useLocomotiveScroll } from 'context/locomotive-scroll'
import { lerp } from 'lib/utils'

import { useR3fContext } from './context'
import { Environment, OrbitControls } from '@react-three/drei'

function getAdjustedScroll(
  k: number,
  scrollValue: number,
  deltaValue?: number
) {
  const inverseRelation = k / window.innerHeight
  const adjustedScroll = scrollValue * inverseRelation
  const adjustedDelta = (deltaValue || 0) * inverseRelation

  return { adjustedScroll, adjustedDelta }
}

export const R3fCanvas = ({
  children: componentChildren
}: {
  children?: React.ReactNode
}) => {
  const { children, cameraRef, sceneRef, canvasRef } = useR3fContext()
  const { scroll, isSmooth } = useLocomotiveScroll()

  React.useEffect(() => {
    if (!scroll) return
    if (isSmooth) {
      const update = () => {
        if (!cameraRef.current) return
        cameraRef.current.updateMatrix()
        window.requestAnimationFrame(update)
      }

      update()

      const handler: EventHandler = ({ scroll, delta }) => {
        if (!cameraRef.current) return
        const k = 100 * 0.12612 // based on simple inverse proportion formula
        const { adjustedScroll, adjustedDelta } = getAdjustedScroll(
          k,
          scroll.y,
          delta.y
        )
        cameraRef.current.position.y =
          -1 * lerp(adjustedScroll, adjustedDelta, locoLerp)
      }

      scroll.on('scroll', handler)
      return () => {
        scroll.off('scroll', handler)
      }
    } else {
      const handler = () => {
        if (!cameraRef.current) return
        const k = 637 * 0.01978 // based on simple inverse proportion formula
        const { adjustedScroll } = getAdjustedScroll(k, window.scrollY)
        cameraRef.current.position.y = -1 * adjustedScroll
      }

      window.addEventListener('scroll', handler)
      return () => {
        window.removeEventListener('scroll', handler)
      }
    }
  }, [cameraRef, isSmooth, scroll])

  return (
    <Portal id="r3f-canvas">
      <Canvas
        style={{
          bottom: 0,
          height: '100vh',
          left: 0,
          pointerEvents: 'none',
          position: 'fixed',
          right: 0,
          top: 0,
          transform: 'translateZ(0)',
          zIndex: 1
        }}
        onCreated={({ camera, scene }) => {
          cameraRef.current = camera
          sceneRef.current = scene
        }}
        camera={{ position: [0, 0, 20], fov: 35, near: 0.01 }}
        gl={{ alpha: true, antialias: true, depth: false, stencil: false }}
        ref={canvasRef}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} />
        <React.Suspense fallback={null}>
          <Environment preset="city" />
          {Object.keys(children).map((key) => {
            const { Renderer, props } = children[key]
            return <Renderer {...props} key={key} />
          })}
          {componentChildren}
        </React.Suspense>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate />
      </Canvas>
    </Portal>
  )
}
