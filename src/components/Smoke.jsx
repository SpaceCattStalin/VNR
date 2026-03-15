import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import coffeeSmokeVertexShader from '../shaders/coffeeSmoke/vertex.glsl';
import coffeeSmokeFragmentShader from '../shaders/coffeeSmoke/fragment.glsl';

export default function Smoke() {
  const meshRef = useRef();
  const perlinTexture = useLoader(THREE.TextureLoader, '/perlin.png');

  const texture = useMemo(() => {
    perlinTexture.wrapS = THREE.RepeatWrapping;
    perlinTexture.wrapT = THREE.RepeatWrapping;
    return perlinTexture;
  }, [perlinTexture]);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(1, 1, 16, 64);
    geo.translate(0, 0.5, 0);
    geo.scale(3, 6, 2);
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: coffeeSmokeVertexShader,
        fragmentShader: coffeeSmokeFragmentShader,
        uniforms: {
          uTime: new THREE.Uniform(0),
          uPerlinTexture: new THREE.Uniform(texture),
        },
        side: THREE.DoubleSide,
        transparent: true,
        depthWrite: false,
      }),
    [texture],
  );

  useFrame((state) => {
    if (material.uniforms.uTime)
      material.uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={[0, 2, 0]}
    />
  );
}
