import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const CameraSetup = () => {
    const { camera } = useThree();
  
    useEffect(() => {
      camera.fov = 60;
      camera.near = 0.1;
      camera.far = 1000;
      camera.position.set(0, 15, -5); // Move camera back and up for a better view
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    }, [camera]);
  
    return null;
  };
  
  export default CameraSetup;