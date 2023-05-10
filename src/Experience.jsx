import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import CustomObject from './CustomObject';

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef(null);
  const groupRef = useRef();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} />
      <group ref={groupRef}>
        <mesh position-x={-1}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' wireframe={false} />
        </mesh>
        <mesh ref={cubeRef} position-x={1}>
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' wireframe={false} />
        </mesh>
      </group>
      <mesh rotation-x={-Math.PI / 2} position-y={-1} scale={4}>
        <planeGeometry />
        <meshStandardMaterial color='green' wireframe={false} />
      </mesh>
      <CustomObject />
    </>
  );
}
