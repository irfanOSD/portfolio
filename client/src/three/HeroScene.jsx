import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const ACCENT = "#5eead4";

function Particles({ count, opacity }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 16;
      array[i * 3 + 1] = (Math.random() - 0.5) * 10;
      array[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return array;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color={ACCENT}
        size={0.03}
        sizeAttenuation
        transparent
        opacity={opacity}
      />
    </points>
  );
}

function Shape({ position, children, speed = 1, scale = 1, opacity }) {
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.15 * speed;
      ref.current.rotation.y += delta * 0.2 * speed;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        {children}
        <meshBasicMaterial
          color={ACCENT}
          wireframe
          transparent
          opacity={opacity}
        />
      </mesh>
    </Float>
  );
}

function CameraRig() {
  // Camera drifts slightly towards the mouse position
  useFrame((state, delta) => {
    const { pointer, camera } = state;
    camera.position.x += (pointer.x * 0.6 - camera.position.x) * delta * 2;
    camera.position.y += (pointer.y * 0.4 - camera.position.y) * delta * 2;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function HeroScene({ isMobile, active }) {
  // Shapes sit on the right on desktop, so they stay away from the text.
  // On mobile the text covers the whole width, so shapes are smaller and fainter.
  const layout = isMobile
    ? { ico: [1.1, 2.4, -2], box: [-1.2, -3.2, -2], torus: [1.2, -2.0, -2] }
    : { ico: [4.0, 0.9, -1], box: [4.7, -1.6, -2], torus: [2.9, -2.5, -1.5] };
  const scale = isMobile ? 0.6 : 1;
  const shapeOpacity = isMobile ? 0.3 : 0.55;

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, isMobile ? 1.25 : 1.75]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: !isMobile, powerPreference: "high-performance" }}
    >
      <Particles
        count={isMobile ? 80 : 220}
        opacity={isMobile ? 0.35 : 0.6}
      />

      <Shape position={layout.ico} scale={scale} opacity={shapeOpacity}>
        <icosahedronGeometry args={[1.3, 0]} />
      </Shape>
      <Shape
        position={layout.box}
        scale={scale}
        speed={0.8}
        opacity={shapeOpacity}
      >
        <boxGeometry args={[1.2, 1.2, 1.2]} />
      </Shape>
      <Shape
        position={layout.torus}
        scale={scale}
        speed={1.3}
        opacity={shapeOpacity}
      >
        <torusGeometry args={[0.8, 0.12, 8, 32]} />
      </Shape>

      {!isMobile && <CameraRig />}
    </Canvas>
  );
}

export default HeroScene;