import {
  Text,
  Html,
  OrbitControls,
  TransformControls,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { useRef } from 'react';
import font from '../public/bangers-v20-latin-regular.woff';

export default function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh position-x={-2} ref={sphereRef}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
        <Html
          position={[1, 1, 0]}
          wrapperClass='label'
          center
          distanceFactor={6}
          occlude={[sphereRef, cubeRef]}
        >
          That's a sphere 👍
        </Html>
      </mesh>

      <mesh position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>
      <TransformControls object={cubeRef} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.75}
          color='greenyellow'
        />
        {/* <meshStandardMaterial color='greenyellow' /> */}
      </mesh>
      <Float>
        <Text
          font={font}
          fontSize={1}
          color='salmon'
          position-y={2}
          maxWidth={2}
          textAlign='center'
        >
          I LOVE R3F
        </Text>
      </Float>
    </>
  );
}
