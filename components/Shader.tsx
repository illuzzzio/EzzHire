'use client';

import React, { useState, useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-expect-error maath types are not defined properly
import * as random from 'maath/random/dist/maath-random.esm';

const StarBackground = (props: React.ComponentProps<'group'>) => {
  const ref = useRef<THREE.Group>(null!);
  const [radius, setRadius] = useState(1.2);
  const [sphere, setSphere] = useState<Float32Array>(
    () => random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  // Track which keys are being pressed
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // Animate radius change
  useEffect(() => {
    let frameId: number;

    const animate = () => {
      const qAndUp = keysPressed.current['q'] && keysPressed.current['ArrowUp'];
      const oneAndDown = keysPressed.current['q'] && keysPressed.current['ArrowDown'];

      setRadius(prev => {
        let newRadius = prev;
        if (qAndUp) {
          newRadius = Math.min(prev + 0.03, 5);
        } else if (oneAndDown) {
          newRadius = Math.max(prev - 0.03, 0.5);
        }
        return newRadius;
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Regenerate stars on radius change
  useEffect(() => {
    const newSphere = random.inSphere(new Float32Array(5000 * 3), { radius });
    setSphere(newSphere);
  }, [radius]);

  // Keydown/keyup listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Rotation effect
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#39FF14"
          size={0.004}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="fixed inset-0 w-screen h-screen z-[-1]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
