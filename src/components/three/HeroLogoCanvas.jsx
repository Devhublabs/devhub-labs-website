/* eslint-disable react/no-unknown-property */

import { memo, Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useAnimations, useGLTF } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";
import logoModel from "@/assets/logos/3D render.glb";

useGLTF.preload(logoModel);

const LogoModel = memo(function LogoModel({ reducedMotion, active }) {
  const { scene, animations } = useGLTF(logoModel);
  const groupRef = useRef(null);
  const { actions } = useAnimations(animations, groupRef);
  const { invalidate } = useThree();

  const prepared = useMemo(() => {
    const root = scene.clone(true);

    root.traverse((child) => {
      if (!child.isMesh) {
        return;
      }

      if (child.geometry && !child.geometry.attributes.normal) {
        child.geometry.computeVertexNormals();
      }

      if (child.material) {
        child.material.metalness = 0.92;
        child.material.roughness = 0.26;
        child.material.envMapIntensity = 1.25;
        child.material.needsUpdate = true;
      }
    });

    const box = new THREE.Box3().setFromObject(root);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    root.position.sub(center);

    const maxDimension = Math.max(size.x, size.y, size.z) || 1;
    const wrapper = new THREE.Group();
    wrapper.add(root);
    wrapper.scale.setScalar(2 / maxDimension);

    return wrapper;
  }, [scene]);

  useEffect(() => {
    const actionName = Object.keys(actions)[0];
    const action = actionName ? actions[actionName] : null;

    if (!action) {
      return undefined;
    }

    action.reset();
    action.play();
    action.setLoop(THREE.LoopRepeat, Infinity);

    return () => action.stop();
  }, [actions]);

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group || !active) {
      return;
    }

    if (animations.length > 0) {
      return;
    }

    if (reducedMotion) {
      group.rotation.set(0.08, -0.4, 0);
      return;
    }

    group.rotation.y += delta * 0.25;
    invalidate();
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.4, 0]}>
      <primitive object={prepared} />
    </group>
  );
});

function HeroLogoCanvas({ active = true }) {
  const reducedMotion = useReducedMotion();
  const shouldAnimate = active && !reducedMotion;

  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 3.4], fov: 35 }}
      frameloop={shouldAnimate ? "always" : "demand"}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[3, 4, 5]} intensity={1.15} />
      <directionalLight position={[-4, -1, -2]} intensity={0.45} color="#b98cff" />

      <Suspense fallback={null}>
        <LogoModel reducedMotion={reducedMotion} active={active} />
        <Environment resolution={128}>
          <Lightformer
            intensity={2}
            position={[0, 3, 2]}
            scale={[6, 3, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={1.4}
            position={[-3, 1, 1]}
            scale={[3, 3, 1]}
            color="#c9a9ff"
          />
          <Lightformer
            intensity={1.2}
            position={[3, -1, 1]}
            scale={[3, 3, 1]}
            color="#8b5cf6"
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}

export default memo(HeroLogoCanvas);
