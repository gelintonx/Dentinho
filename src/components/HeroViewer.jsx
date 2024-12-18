import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const HeroViewer = ({ gltfUrl, width = 1200, height = 600 }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 1, 2); // Default position, will adjust based on model

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Smooth control movement
    controls.dampingFactor = 0.05;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load the GLTF/GLB file
    const loader = new GLTFLoader();
    loader.load(
      gltfUrl,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Automatically adjust the camera to fit the model
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Move the model to the origin for better framing
        model.position.x -= center.x;
        model.position.y -= center.y;
        model.position.z -= center.z;

        // Adjust the camera to fit the model
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        const cameraZ = Math.abs(maxDim / (2 * Math.tan(fov / 2)));

        camera.position.set(0, 0, cameraZ * 1.5); // Zoom out slightly for padding
        camera.lookAt(0, 0, 0);

        controls.target.set(0, 0, 0); // Update controls target to center the model
        controls.update();
      },
      undefined,
      (error) => {
        console.error('Error loading the GLTF file:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [gltfUrl, width, height]);

  return <div ref={mountRef} style={{ width, height, backgroundColor: 'white' }} />;
};

export default HeroViewer;
