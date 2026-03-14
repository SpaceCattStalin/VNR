export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      {/* <hemisphereLight
        args={[0xffffff, 0x444470, 0.8]}
        position={[0, 20, 0]}
      /> */}
      <directionalLight
        position={[0, 15, 5]}
        intensity={2}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <directionalLight
        position={[5, 5, 10]}
        intensity={0.8}
      />
      {/* <pointLight position={[10, -5, 15]} intensity={15} />
      <pointLight position={[-10, -5, 15]} intensity={15} /> */}
    </>
  );
}
