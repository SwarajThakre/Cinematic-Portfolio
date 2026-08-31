"use client";

import * as THREE from "three";
import { Suspense, useEffect, useRef, useState, useMemo } from "react";

import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";

import { Environment, Lightformer, useGLTF, useTexture } from "@react-three/drei";

import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
} from "@react-three/rapier";

import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Code2 } from "lucide-react";

extend({
  MeshLineGeometry,
  MeshLineMaterial,
});

const GLTF_PATH = "/assets/cards.glb";
const TEXTURE_PATH = "/assets/prophoto.webp";

useGLTF.preload(GLTF_PATH);
useTexture.preload(TEXTURE_PATH);

import React from "react";

class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    console.warn("3D WebGL Canvas failed, displaying fallback ID Card", error);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function Fallback3DCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / (rect.height / 2)) * -10, y: (x / (rect.width / 2)) * 10 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="absolute right-4 sm:right-16 lg:right-28 top-16 sm:top-20 z-30 flex flex-col items-center select-none"
    >
      {/* Lanyard Rope */}
      <div className="w-2 h-28 sm:h-36 bg-gradient-to-b from-white/90 via-zinc-400 to-zinc-700 shadow-xl rounded-full animate-pulse" />
      {/* Clip */}
      <div className="w-6 h-8 rounded-t-lg bg-zinc-400 border border-white/40 shadow-lg -mt-1 z-10" />

      {/* 3D ID Card Frame */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="relative w-64 sm:w-80 aspect-[1/1.35] rounded-3xl border border-white/20 bg-zinc-950/90 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden backdrop-blur-2xl p-4 sm:p-5 flex flex-col items-center justify-between -mt-2 group"
      >
        <div className="w-12 h-2 rounded-full bg-white/20 mb-2" />

        <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black">
          <img
            src="/assets/prophoto.webp"
            alt="Swaraj Thakre"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="w-full text-center space-y-1 pt-3">
          <h3 className="text-lg font-black text-white tracking-wider uppercase">Swaraj</h3>
          <p className="text-[10px] font-mono tracking-widest text-white/50 uppercase">
            Full-Stack & AI Builder
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BandCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0, shineX: 50, shineY: 50 });
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const shineX = ((e.clientX - rect.left) / rect.width) * 100;
    const shineY = ((e.clientY - rect.top) / rect.height) * 100;
    setTilt({
      x: (y / (rect.height / 2)) * -14,
      y: (x / (rect.width / 2)) * 14,
      shineX,
      shineY,
    });
  };

  return (
    <div
      className="absolute right-4 sm:right-16 lg:right-28 top-16 sm:top-20 z-30 flex flex-col items-center select-none cursor-pointer pointer-events-auto"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, shineX: 50, shineY: 50 })}
      onClick={() => setIsFlipped((f) => !f)}
    >
      {/* Lanyard Rope */}
      <div className="w-2.5 h-28 sm:h-36 bg-gradient-to-b from-white/90 via-zinc-400 to-zinc-800 shadow-2xl rounded-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:10px_10px]" />
      </div>

      {/* Metallic Lanyard Clip */}
      <div className="w-7 h-9 rounded-t-xl bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-500 border border-white/50 shadow-xl -mt-1 z-10 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-500" />
      </div>

      {/* Subtle Glow Backdrop */}
      <div className="absolute top-36 w-64 h-80 bg-white/10 blur-3xl rounded-full pointer-events-none" />

      {/* 3D Interactive ID Card Frame */}
      <div
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg)`,
          transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-72 sm:w-84 aspect-[1/1.4] rounded-3xl border border-white/20 bg-zinc-950/95 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden backdrop-blur-2xl p-5 flex flex-col items-center justify-between -mt-2 group"
      >
        {/* Specular Light Reflection Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${tilt.shineX}% ${tilt.shineY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`,
          }}
        />

        {/* Lanyard Hole Cutout */}
        <div className="w-12 h-2.5 rounded-full bg-zinc-900 border border-white/20 mb-3 shadow-inner z-10" />

        {/* Card Header Info */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono tracking-widest text-white/60 uppercase mb-2 z-10">
          <span>SWARAJ · ID #2629</span>
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            LIVE
          </span>
        </div>

        {/* Center Portrait Image Frame */}
        <div className="relative w-full aspect-square overflow-hidden rounded-2xl border border-white/15 bg-zinc-900 shadow-2xl z-10">
          <img
            src="/assets/prophoto.webp"
            alt="Swaraj Thakre"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Card Bottom Branding */}
        <div className="w-full text-center space-y-1 pt-3 z-10">
          <h3 className="text-xl font-black tracking-wider text-white uppercase font-[Poppins]">
            SWARAJ THAKRE
          </h3>
          <div className="flex items-center justify-center gap-2 pt-1 text-white/55">
            <Code2 size={15} strokeWidth={1.8} aria-hidden="true" />
            <p className="text-[10px] font-mono tracking-[0.16em] uppercase">FRONTEND DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Band({
  isMobile,
  maxSpeed = 50,
  minSpeed = 10,
}: {
  isMobile: boolean;
  maxSpeed?: number;
  minSpeed?: number;
}) {
  const band = useRef<any>(null);

  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);

  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const gltf = useGLTF(GLTF_PATH) as any;

  const nodes = gltf?.nodes || {};
  const materials = gltf?.materials || {};

  const texture = useTexture(TEXTURE_PATH);

  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  const cardTexture = useMemo(() => {
    try {
      if (!texture || !texture.image || !texture.image.width || !texture.image.height) {
        return texture;
      }

      const canvas = document.createElement("canvas");
      canvas.width = 2000;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Dark background fill
        ctx.fillStyle = "#09090b";
        ctx.fillRect(0, 0, 2000, 1000);

        // FRONT SIDE (Left Half: 0 to 1000px)
        const img = texture.image;
        const imgWidth = img.width || 1000;
        const imgHeight = img.height || 1000;
        const imgAspect = imgWidth / imgHeight;

        let drawW = 1000;
        let drawH = 1000;
        let drawX = 0;
        let drawY = 0;

        if (imgAspect > 1) {
          drawH = 1000 / imgAspect;
          drawY = (1000 - drawH) / 2;
        } else {
          drawW = 1000 * imgAspect;
          drawX = (1000 - drawW) / 2;
        }

        ctx.drawImage(img, drawX, drawY, drawW, drawH);

        // BACK SIDE (Right Half: 1000 to 2000px)
        ctx.fillStyle = "#121217";
        ctx.fillRect(1000, 0, 1000, 1000);

        // Back side branding & typography
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 44px monospace";
        ctx.textAlign = "center";
        ctx.fillText("SWARAJ", 1500, 480);

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.font = "24px monospace";
        ctx.fillText("FRONTEND & REACT DEVELOPER", 1500, 540);
      }

      const canvasTex = new THREE.CanvasTexture(canvas);
      canvasTex.needsUpdate = true;
      canvasTex.flipY = false;
      return canvasTex;
    } catch (e) {
      console.warn("Failed to generate 3D card texture, using default", e);
      return texture;
    }
  }, [texture]);

  const { width, height } = useThree((state) => state.size);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  const [dragged, drag] = useState<any>(null);

  const [hovered, hover] = useState(false);

  const canDrag = true;

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1] as any);

  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1] as any);

  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1] as any);

  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ] as any);

  useEffect(() => {
    if (hovered && canDrag) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";

      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged !== null && card.current && canDrag) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);

      dir.copy(vec).sub(state.camera.position).normalize();

      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((r) => r.current?.wakeUp());

      const newX = vec.x - dragged.x;

      let newY = vec.y - dragged.y;

      const newZ = 0;

      if (isMobile) {
        vec.multiplyScalar(0.92);
      }

      const limit = isMobile ? -0.05 : -0.2;

      if (state.pointer.y < limit) {
        newY = card.current.translation().y;
      }

      card.current.setNextKinematicTranslation({
        x: newX,
        y: newY,
        z: newZ,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped) {
          ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        }

        const d = Math.max(
          0.1,
          Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
        );

        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + d * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation());

      curve.points[1].copy(j2.current.lerped);

      curve.points[2].copy(j1.current.lerped);

      curve.points[3].copy(fixed.current.translation());

      if (band.current?.geometry) {
        band.current.geometry.setPoints(curve.getPoints(32));
      }

      ang.copy(card.current.angvel());

      rot.copy(card.current.rotation());

      card.current.setAngvel({
        x: ang.x,
        y: ang.y - rot.y * 0.25,
        z: ang.z,
      });
    }
  });

  curve.curveType = "chordal";

  return (
    <>
      <group position={isMobile ? [0, 2.5, 0] : [1.5, 3, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={isMobile ? 1.7 : 2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => canDrag && hover(true)}
            onPointerOut={() => canDrag && hover(false)}
            onPointerUp={(e: any) => {
              if (!canDrag) return;

              e.stopPropagation();

              e.target.releasePointerCapture(e.pointerId);

              drag(false);
            }}
            onPointerDown={(e: any) => {
              if (!canDrag) return;

              e.target.setPointerCapture(e.pointerId);

              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {nodes?.card?.geometry && (
              <mesh geometry={nodes.card.geometry}>
                <meshPhysicalMaterial
                  {...materials.base}
                  map={cardTexture}
                  roughness={0.35}
                  metalness={0.1}
                  clearcoat={1}
                  clearcoatRoughness={0.15}
                />
              </mesh>
            )}

            {nodes?.clip?.geometry && (
              <mesh geometry={nodes.clip.geometry} material={materials.metal} />
            )}

            {nodes?.clamp?.geometry && (
              <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
            )}
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        {/* @ts-expect-error meshline */}
        <meshLineGeometry />

        {/* @ts-expect-error meshline */}
        <meshLineMaterial
          transparent
          opacity={0.9}
          color="white"
          depthTest={false}
          resolution={[width, height]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
