import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
// @ts-ignore
import glsl from 'glslify'
import * as THREE from 'three'

const Image = shaderMaterial(
  // Uniform
  {
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl(`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `),
  // Fragment Shader
  glsl(`
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main() {
      vec2 uv = vUv;
      vec4 texture = texture2D(uTexture, uv);
      gl_FragColor = texture;
    }
  `)
)

extend({ Image })
