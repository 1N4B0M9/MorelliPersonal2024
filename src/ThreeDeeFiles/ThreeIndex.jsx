import { createRoot } from 'react-dom/client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Spheres from './Box';
import Camera from './CamerSetup';

export default function ThreeIndex() {
  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // Ensures the canvas does not block interactions
      }}
      camera={{ fov: 60, position: [0, 15, -5] }}
    >
      <Camera />
      <ambientLight intensity={0.9} />
      <directionalLight position={[10, 10, 10]} intensity={1000} />
      <Spheres />
    </Canvas>
  );
}