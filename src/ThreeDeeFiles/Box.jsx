import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Spheres = () => {
  const numColumns = 80;
  const numRows = 80;
  const sphereRadius = 0.1;
  const meshRef = useRef();
  const [rainbow, setRainbow] = useState(false);


  // Pre-compute sphere positions
  const positions = useMemo(() => {
    const posArray = [];
    for (let i = 0; i < numColumns * numRows; i++) {
      const x = (i % numColumns) * 0.6 - (numColumns / 2) * 0.6;
      const y = 0;
      const z = Math.floor(i / numColumns) * 0.6 - (numRows / 2) * 0.6;
      posArray.push([x, y, z]);
    }
    return posArray;
  }, [numColumns, numRows]);

  // Initialize spheres with position and color
  React.useEffect(() => {
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();
    for (let i = 0; i < numColumns * numRows; i++) {
      const [x, y, z] = positions[i];
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      color.set('#ffffff'); // Start with white color
      meshRef.current.setColorAt(i, color);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.instanceColor.needsUpdate = true;
  }, [positions]);

  // Animation loop for wave and fade effect
  useFrame(({ clock, camera }) => {
    const time = clock.getElapsedTime();
    const waveSpeed = 1.5;
    const waveFrequency = 0.3;
    const waveHeight = 1.2; // Increased wave height
    const dummy = new THREE.Object3D();
    const color = new THREE.Color();

    for (let i = 0; i < numColumns * numRows; i++) {
      const [x, y, z] = positions[i];
      const waveOffset = z * waveFrequency + x * waveFrequency;
      const yPosition = Math.sin(time * waveSpeed + waveOffset) * waveHeight;

      dummy.position.set(x, yPosition, z);

      // More intense fade effect
      const distance = dummy.position.distanceTo(camera.position);
      const fadeFactor = Math.max(0, 1 - (distance / 20)); // Stronger fade effect

      dummy.scale.set(fadeFactor, fadeFactor, fadeFactor);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Color transition from white to dark gray based on fade factor
      color.lerpColors(new THREE.Color('#ffffff'), new THREE.Color('#333333'), 1 - fadeFactor);
      meshRef.current.setColorAt(i, color);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, numColumns * numRows]}>
      <sphereGeometry args={[sphereRadius, 16, 16]} />
      <meshPhysicalMaterial vertexColors />
    </instancedMesh>
  );
};

export default Spheres;