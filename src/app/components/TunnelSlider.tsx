"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TunnelSlider() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let ww = window.innerWidth;
    let wh = window.innerHeight;

    // Helpers
    const Mathutils = {
      normalize: (value: number, min: number, max: number) =>
        (value - min) / (max - min),
      interpolate: (norm: number, min: number, max: number) =>
        min + (max - min) * norm,
      map: (value: number, min1: number, max1: number, min2: number, max2: number) => {
        if (value < min1) value = min1;
        if (value > max1) value = max1;
        return Mathutils.interpolate(Mathutils.normalize(value, min1, max1), min2, max2);
      },
    };

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(ww, wh);

    // Scene + Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    const c = new THREE.Group();
    c.position.z = 400;
    c.add(camera);
    scene.add(c);

    // Composer
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.9,
      0.4,
      0
    );
    const composer = new EffectComposer(renderer);
    composer.setSize(window.innerWidth, window.innerHeight);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Path points
    const  points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
    ].map(([x, z, y]) => new THREE.Vector3(x, y, z));

    const path = new THREE.CatmullRomCurve3(points);
    path.tension = 0.5;

    // Tube
    const geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);
    const texture = new THREE.TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg",
      (tex) => {
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(15, 2);
      }
    );
    const bumpMap = new THREE.TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg",
      (tex) => {
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.repeat.set(15, 2);
      }
    );
    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      map: texture,
      shininess: 20,
      bumpMap: bumpMap,
      bumpScale: -0.03,
      specular: 0x0b2349,
    });
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    // Light
    const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
    scene.add(light);

    // Scroll control
    let p1: THREE.Vector3, p2: THREE.Vector3;
    const updateCamera = (perc: number) => {
      p1 = path.getPointAt(perc);
      p2 = path.getPointAt((perc + 0.03) % 1);
      c.position.copy(p1);
      c.lookAt(p2);
      light.position.copy(p2);
    };

    const  tubePerc = { percent: 0 };
    gsap.to(tubePerc, {
      percent: 0.96,
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollTarget",
        start: "top top",
        end: "bottom 100%",
        scrub: 5,
      },
      onUpdate: () => updateCamera(tubePerc.percent),
    });

    // Particles
    const spikeyTexture = new THREE.TextureLoader().load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png"
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      map: spikeyTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(6800 * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 500;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Animate
    const animate = () => {
      composer.render();
      requestAnimationFrame(animate);
    };
    animate();

    // Resize
    const onResize = () => {
      ww = window.innerWidth;
      wh = window.innerHeight;
      camera.aspect = ww / wh;
      camera.updateProjectionMatrix();
      renderer.setSize(ww, wh);
      composer.setSize(ww, wh);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      composer.dispose();
    };
  }, []);



  return (
  <div className="relative w-full h-screen">
    {/* Tunnel Canvas */}
    <canvas
      ref={canvasRef}
      className="experience fixed top-0 left-0 w-full h-full"
    />

    {/* Scroll Target */}
    <div className="scrollTarget fixed h-[1000vh] w-[100px] top-0"></div>

    {/* Vignette Overlay */}
    <div className="vignette-radial pointer-events-none fixed top-0 left-0 w-full h-screen z-10"></div>

    {/* ✅ Overlay Text */}
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full z-20">
      <div className="text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-bold drop-shadow-lg">
          Welcome to our world
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl mt-4 drop-shadow-md">
          Scroll down to explore the journey
        </p>
      </div>
    </div>
  </div>
);

}
