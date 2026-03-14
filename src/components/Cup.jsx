import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useMemo } from 'react';

const CUP_MESH_NAMES = ['cup2_obj_0_1', 'cup2_obj_0_2'];

export default function Cup({ current, cupColor }) {
  const { scene } = useGLTF(current);
  const ref = useRef();

  // useEffect(() => {
  //   if (!scene) return;
  //   scene.traverse((child) => {
  //     if (child.isMesh) {
  //       if (CUP_MESH_NAMES.includes(child.name)) {
  //         const mats = Array.isArray(child.material) ? child.material : [child.material];
  //         mats.forEach((material) => {
  //           // Change cup color here
  //           if (material.color) material.color.setHex(cupColor);
  //         });
  //       }
  //       child.material.roughness = 0.4;
  //       child.material.metalness = 0.3;
  //     }
  //   });
  // }, [scene]);
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material.roughness = 0.4;
        child.material.metalness = 0.3;

        if (['cup2_obj_0_1', 'cup2_obj_0_2'].includes(child.name)) {
          child.material = child.material.clone();
          child.material.color.setHex(cupColor);
        }
      }
    });
    return clone;
  }, [scene, cupColor]);

  if (!scene) return null;

  return (
    <primitive
      ref={ref}
      object={scene.clone()}
      position={[0, 0, 0]}
      scale={[3, 3, 3]}
    />
  );
}
