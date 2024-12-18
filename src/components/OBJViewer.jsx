import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const OBJViewer = ({ objPath, mtlPath, width = 600, height = 600 }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Load the MTL and OBJ files
    const mtlLoader = new MTLLoader();
    if (mtlPath) {
      mtlLoader.load(mtlPath, (materials) => {
        materials.preload();

        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);

        objLoader.load(
          objPath,
          (object) => {
            scene.add(object);
          },
          undefined,
          (error) => {
            console.error('Error loading the OBJ file:', error);
          }
        );
      });
    } else {
      // If no MTL file is provided, load OBJ directly
      const objLoader = new OBJLoader();
      objLoader.load(
        objPath,
        (object) => {
          scene.add(object);
        },
        undefined,
        (error) => {
          console.error('Error loading the OBJ file:', error);
        }
      );
    }

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
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [objPath, mtlPath, width, height]);

  return <div ref={mountRef} style={{ width, height }} />;
};

export default OBJViewer;
