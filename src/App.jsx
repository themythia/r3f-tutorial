import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import * as THREE from 'three';

export default function App() {
  return (
    <Canvas
      camera={{
        fov: 45,
        // zoom: 100,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
      gl={{
        antialias: false,
        toneMapping: THREE.CineonToneMapping,
        outputEncoding: THREE.LinearEncoding,
      }}

      // flat // removes default ACESFilmicToneMapping
    >
      <Experience />
    </Canvas>
  );
}
