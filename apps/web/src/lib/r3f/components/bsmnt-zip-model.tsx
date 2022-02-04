import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { isClient } from 'lib/constants'

if (isClient) {
  useGLTF.preload('/models/bsmnt.glb')
}

type GLTFResult = GLTF & {
  nodes: {
    Curve: THREE.Mesh
    Packaging_01_Mesh: THREE.Mesh
    BSMT_Tag_2: THREE.Mesh
    BSMT_Tag_3: THREE.Mesh
  }
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial
    defaultMat: THREE.MeshPhysicalMaterial
    BSMT_Tag_2: THREE.MeshStandardMaterial
    BSMT_Tag_3: THREE.MeshStandardMaterial
  }
}

type ActionName = 'CurveAction' | 'Packaging_01_MeshAction'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export function BsmnZipModel(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF(
    '/models/bsmnt.glb'
  ) as GLTFResult
  // @ts-ignore
  const { actions } = useAnimations<GLTFActions>(animations, group)

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Curve"
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Material.003']}
        position={[0, 0.9, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.37, 1.37, 1.37]}
      />
      <mesh
        name="Packaging_01_Mesh"
        castShadow
        receiveShadow
        geometry={nodes.Packaging_01_Mesh.geometry}
        material={materials.defaultMat}
        position={[-0.05, 0.9, 0.03]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[9.89, 9.89, 9.89]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BSMT_Tag_2.geometry}
          material={materials.BSMT_Tag_2}
          position={[0.03, 0, -0.03]}
          rotation={[-0.01, -0.38, -0.04]}
          scale={[0.02, 0.02, 0.02]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BSMT_Tag_3.geometry}
          material={materials.BSMT_Tag_3}
          position={[-0.02, 0.01, 0.04]}
          scale={[0.02, 0.02, 0.02]}
        />
      </mesh>
    </group>
  )
}
