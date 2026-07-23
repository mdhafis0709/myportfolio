import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

// Helper to generate points inside a sphere without needing external libraries
function generateSpherePoints(count, radius) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random()); // Cubic root for uniform distribution in volume
    
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

function StarField(props) {
  const ref = useRef();
  const [sphere] = useState(() => generateSpherePoints(2000, 1.5));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingTechMesh() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Rotation animation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.002;

      // React to cursor coordinates (pointer coordinates go from -1 to 1)
      const targetX = state.pointer.y * 0.3;
      const targetY = state.pointer.x * 0.3;

      // Interpolate mesh position for a smooth floating delay
      meshRef.current.position.x += (state.pointer.x * 0.4 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (state.pointer.y * 0.4 - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.15 : 1.0}
      position={[0, 0, 0]}
    >
      <icosahedronGeometry args={[0.9, 1]} />
      <meshBasicMaterial
        color={hovered ? '#ec38bc' : '#00f2fe'}
        wireframe
        transparent
        opacity={0.35}
      />
    </mesh>
  );
}

export default function Canvas3D() {
  return (
    <div className="canvas-background">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <StarField />
        <FloatingTechMesh />
      </Canvas>
    </div>
  );
}
