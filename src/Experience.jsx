import { OrbitControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import {
  Vignette,
  EffectComposer,
  Glitch,
  Bloom,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
export default function Experience() {
  return (
    <>
      <color attach='background' args={['#000000']} />
      <EffectComposer multisampling={0}>
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}
        {/* <Bloom mipmapBlur /> */}
      </EffectComposer>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial
          color='orange'
          emissive='orange'
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color={[1, 1.4, 4]} toneMapped={false} />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}
