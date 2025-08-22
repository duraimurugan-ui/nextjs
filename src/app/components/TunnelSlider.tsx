"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobeHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene + Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // 🌑 Black background
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 🌍 Globe
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
    );
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
    });
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);

    // 🌌 Stars background
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 3000;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 80; // Spread stars wider
    }
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ✨ Atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.05, 64, 64);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // blue glow
      transparent: true,
      opacity: 0.25,
      side: THREE.BackSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // 💡 Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // 🎥 Animate
    const animate = () => {
      globe.rotation.y += 0.002;
      atmosphere.rotation.y += 0.001;
      stars.rotation.y += 0.0005; // Slowly rotate stars too
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      {/* Overlay Text */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
          Discover a Connected World
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Journey beyond boundaries with our interactive globe — a modern blend of 
          exploration, innovation, and connection in a limitless universe.
        </p>
      </div>
    </div>
  );
}
