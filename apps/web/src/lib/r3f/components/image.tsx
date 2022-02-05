import '../extensions/image'

import { useLoader } from '@react-three/fiber'
import * as React from 'react'
import { ClampToEdgeWrapping, LinearFilter, TextureLoader } from 'three'

import { useReactId } from '~/hooks/use-react-id'

import { useR3fContextDispatch } from '../context'
import { GroupSlot } from './layout/group'

const Renderer = ({ shadowElement }: { shadowElement: HTMLImageElement }) => {
  const texture = useLoader(TextureLoader, shadowElement.src)

  React.useMemo(() => {
    texture.generateMipmaps = false
    texture.wrapS = texture.wrapT = ClampToEdgeWrapping
    texture.minFilter = LinearFilter
    texture.needsUpdate = true
  }, [texture])

  return (
    <GroupSlot shadowElement={shadowElement}>
      <mesh>
        <planeBufferGeometry attach="geometry" />
        {/* @ts-ignore */}
        <image attach="material" uTexture={texture} />
      </mesh>
    </GroupSlot>
  )
}

export const R3fImage = ({
  src,
  style,
  ...rest
}: Omit<JSX.IntrinsicElements['img'], 'ref' | 'src'> & {
  src: string
}) => {
  const ref = React.useRef<HTMLImageElement>(null)
  const { addChildren } = useR3fContextDispatch()
  const [isLoaded, setIsLoaded] = React.useState(false)
  const key = useReactId()

  React.useEffect(() => {
    if (!ref.current) return
    addChildren({
      key,
      Renderer: Renderer,
      props: { shadowElement: ref.current }
    })
  }, [addChildren, key])

  React.useEffect(() => {
    const img = new Image()
    function handleLoad() {
      setIsLoaded(true)
    }
    img.addEventListener('load', handleLoad)
    img.src = src

    return () => {
      img.removeEventListener('load', handleLoad)
    }
  }, [src])

  return (
    <img
      {...rest}
      src={src}
      style={{ opacity: isLoaded ? 0 : undefined, ...style }}
      ref={ref}
    />
  )
}
