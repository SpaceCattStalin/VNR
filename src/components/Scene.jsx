import Lights from './Lights';
import Cup from './Cup';
import Smoke from './Smoke';

export default function Scene({ current, backgroundColor = 0x1a1a1a, cupColor }) {
  return (
    <>
      <color
        attach="background"
        args={[backgroundColor]}
      />
      <Lights />
      <Cup current={current} cupColor={cupColor} />
      <Smoke />
    </>
  );
}
