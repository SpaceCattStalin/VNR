import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as THREE from 'three';
import Scene from './components/Scene';
import { useEffect, useState } from 'react';
import { BACKGROUND_COLORS_PRESET } from './backgroundColors';
import { CUP_COLORS_PRESET } from './cupColors';
import { CONTENT_ITEMS } from './ContentData.jsx';

useGLTF.preload('/Cup1.glb');
useGLTF.preload('/Cup2.glb');
useGLTF.preload('/Cup3.glb');
useGLTF.preload('/Cup4.glb');
useGLTF.preload('/Cup5.glb');
useGLTF.preload('/Cup6.glb');
useGLTF.preload('/Cup7.glb');
useGLTF.preload('/Cup8.glb');
useGLTF.preload('/Cup9.glb');
useGLTF.preload('/Cup10.glb');

const MODELS = [
  '/Cup1.glb',
  '/Cup2.glb',
  '/Cup3.glb',
  '/Cup4.glb',
  '/Cup5.glb',
  '/Cup6.glb',
  '/Cup7.glb',
  '/Cup8.glb',
  '/Cup9.glb',
  '/Cup10.glb',
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [bgColor, setBgColor] = useState(0);
  const [cupColorIndex, setCupColorIndex] = useState(0);

  useEffect(() => {
    if (current >= 0 && current <= 2) {
      setBgColor(0);
      setCupColorIndex(0);
    } else if (current >= 3 && current < 5) {
      setBgColor(1);
      setCupColorIndex(2);
    } else if (current >= 5 && current <= 7) {
      setBgColor(2);
      setCupColorIndex(0);
    } else if (current >= 8 && current <= 9) {
      setBgColor(3);
      setCupColorIndex(1);
    }
  }, [current]);

  const contentIndex = current % CONTENT_ITEMS.length;
  const contentItem = CONTENT_ITEMS[contentIndex];

  return (
    <div className="app-layout">
      <div className="canvas-column">
        <Canvas
          gl={{
            antialias: true,
            alpha: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 1.2,
            outputColorSpace: THREE.SRGBColorSpace,
          }}
          camera={{ position: [0, 3, 10], fov: 25, near: 0.1, far: 100 }}
          onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
        >
          <Scene
            current={MODELS[current]}
            backgroundColor={BACKGROUND_COLORS_PRESET[bgColor].value}
            cupColor={CUP_COLORS_PRESET[cupColorIndex].value}
          />
          <OrbitControls
            target={[0, 0, -4]}
            enableDamping
          />
        </Canvas>
        <button
          type="button"
          className="leftBtn"
          onClick={() =>
            setCurrent((c) => (c === 0 ? MODELS.length - 1 : c - 1))
          }
          aria-label="Previous"
        >
          <ChevronLeft
            size={32}
            strokeWidth={2}
          />
        </button>
        <button
          type="button"
          className="rightBtn"
          onClick={() =>
            setCurrent((c) => (c === MODELS.length - 1 ? 0 : c + 1))
          }
          aria-label="Next"
        >
          <ChevronRight
            size={32}
            strokeWidth={2}
          />
        </button>
        <div className="btnWrapper">
          {MODELS.map((_, index) => (
            <button
              type="button"
              className={`idexBtn ${index === current ? 'idexBtn--active' : ''}`}
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to model ${index + 1}`}
              aria-current={index === current ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
      <div className="content">
        {contentItem && (
          <>
            {contentItem.imageUrl && (
              <div className="contentImageWrapper">
                <img
                  src={contentItem.imageUrl}
                  alt=""
                  className="contentImage"
                />
                {contentItem.imageCaption && (
                  <p className="contentImageCaption">
                    {contentItem.imageCaption}
                  </p>
                )}
              </div>
            )}
            <h2 className="contentTitle">{contentItem.title}</h2>
            <div className="contentPoints">
              {contentItem.points.map((point, i) => (
                <p key={i}>{point}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
