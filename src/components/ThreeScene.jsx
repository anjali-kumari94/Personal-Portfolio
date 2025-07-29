import React, { useRef, useEffect, useMemo } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

const ThreeScene = ({ currentSection }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef([]);
  const floatingObjectsRef = useRef([]);
  const animationIdRef = useRef(null);

  // Scene configuration based on current section
  const sceneConfig = useMemo(
    () => ({
      home: {
        particleCount: 200,
        particleColor: 0x0ea5e9,
        backgroundColor: 0x0f172a,
        cameraPosition: [0, 0, 5],
        floatingObjects: [
          {
            geometry: "sphere",
            position: [3, 2, 0],
            color: 0x0ea5e9,
            size: 0.5,
          },
          {
            geometry: "cube",
            position: [-3, -2, 0],
            color: 0x38bdf8,
            size: 0.3,
          },
          {
            geometry: "torus",
            position: [0, 4, 0],
            color: 0x7dd3fc,
            size: 0.4,
          },
        ],
      },
      about: {
        particleCount: 150,
        particleColor: 0x38bdf8,
        backgroundColor: 0x1e293b,
        cameraPosition: [2, 1, 4],
        floatingObjects: [
          {
            geometry: "octahedron",
            position: [2, 1, 0],
            color: 0x38bdf8,
            size: 0.4,
          },
          {
            geometry: "dodecahedron",
            position: [-2, -1, 0],
            color: 0x0ea5e9,
            size: 0.3,
          },
        ],
      },
      skills: {
        particleCount: 300,
        particleColor: 0x7dd3fc,
        backgroundColor: 0x334155,
        cameraPosition: [0, 0, 6],
        floatingObjects: [
          {
            geometry: "icosahedron",
            position: [4, 0, 0],
            color: 0x7dd3fc,
            size: 0.6,
          },
          {
            geometry: "tetrahedron",
            position: [-4, 0, 0],
            color: 0x38bdf8,
            size: 0.4,
          },
          { geometry: "ring", position: [0, 3, 0], color: 0x0ea5e9, size: 0.5 },
        ],
      },
      projects: {
        particleCount: 250,
        particleColor: 0x0ea5e9,
        backgroundColor: 0x475569,
        cameraPosition: [-2, 2, 5],
        floatingObjects: [
          { geometry: "box", position: [3, 2, 0], color: 0x0ea5e9, size: 0.4 },
          {
            geometry: "sphere",
            position: [-3, -2, 0],
            color: 0x38bdf8,
            size: 0.5,
          },
          {
            geometry: "cylinder",
            position: [0, -3, 0],
            color: 0x7dd3fc,
            size: 0.3,
          },
        ],
      },
      contact: {
        particleCount: 100,
        particleColor: 0x38bdf8,
        backgroundColor: 0x64748b,
        cameraPosition: [0, 0, 4],
        floatingObjects: [
          {
            geometry: "sphere",
            position: [0, 0, 0],
            color: 0x38bdf8,
            size: 0.8,
          },
        ],
      },
    }),
    []
  );

  useEffect(() => {
    if (!mountRef.current) return;

    const config = sceneConfig[currentSection] || sceneConfig.home;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(config.backgroundColor);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(...config.cameraPosition);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x0ea5e9, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Create particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = config.particleCount;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;

      colors[i] = 0.5 + Math.random() * 0.5;
      colors[i + 1] = 0.5 + Math.random() * 0.5;
      colors[i + 2] = 1.0;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Create floating objects
    const createFloatingObject = (config) => {
      let geometry;
      switch (config.geometry) {
        case "sphere":
          geometry = new THREE.SphereGeometry(config.size, 32, 32);
          break;
        case "cube":
          geometry = new THREE.BoxGeometry(
            config.size,
            config.size,
            config.size
          );
          break;
        case "torus":
          geometry = new THREE.TorusGeometry(
            config.size,
            config.size * 0.3,
            16,
            100
          );
          break;
        case "octahedron":
          geometry = new THREE.OctahedronGeometry(config.size);
          break;
        case "dodecahedron":
          geometry = new THREE.DodecahedronGeometry(config.size);
          break;
        case "icosahedron":
          geometry = new THREE.IcosahedronGeometry(config.size);
          break;
        case "tetrahedron":
          geometry = new THREE.TetrahedronGeometry(config.size);
          break;
        case "ring":
          geometry = new THREE.RingGeometry(config.size * 0.5, config.size, 32);
          break;
        case "cylinder":
          geometry = new THREE.CylinderGeometry(
            config.size * 0.5,
            config.size * 0.5,
            config.size
          );
          break;
        default:
          geometry = new THREE.SphereGeometry(config.size, 32, 32);
      }

      const material = new THREE.MeshPhongMaterial({
        color: config.color,
        transparent: true,
        opacity: 0.8,
        shininess: 100,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...config.position);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      scene.add(mesh);
      floatingObjectsRef.current.push(mesh);
    };

    config.floatingObjects.forEach(createFloatingObject);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.001;
        particlesRef.current.rotation.y += 0.002;
      }

      // Animate floating objects
      floatingObjectsRef.current.forEach((object, index) => {
        object.rotation.x += 0.01;
        object.rotation.y += 0.01;
        object.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      // Camera movement
      const time = Date.now() * 0.0001;
      camera.position.x = Math.sin(time) * 2;
      camera.position.y = Math.cos(time) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentSection, sceneConfig]);

  // Animate scene transition when section changes
  useEffect(() => {
    const config = sceneConfig[currentSection] || sceneConfig.home;

    if (sceneRef.current && cameraRef.current) {
      gsap.to(cameraRef.current.position, {
        x: config.cameraPosition[0],
        y: config.cameraPosition[1],
        z: config.cameraPosition[2],
        duration: 2,
        ease: "power2.inOut",
      });

      gsap.to(sceneRef.current.background, {
        r: new THREE.Color(config.backgroundColor).r / 255,
        g: new THREE.Color(config.backgroundColor).g / 255,
        b: new THREE.Color(config.backgroundColor).b / 255,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  }, [currentSection, sceneConfig]);

  return <div ref={mountRef} className="three-canvas" />;
};

export default ThreeScene;
