import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import 'animate.css';

const Teeth = ({ objPath, mtlPath, teethInfo }) => {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Combine passed teethInfo with defaultTeethInfo
  const cards = teethInfo || defaultTeethInfo;

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.offsetWidth / mountRef.current.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 3;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Orbit controls for navigation
    const controls = new OrbitControls(camera, renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load the OBJ and MTL files
    const mtlLoader = new MTLLoader();
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
          console.error('Error loading OBJ file:', error);
        }
      );
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [objPath, mtlPath]);

  // Toggle Fullscreen
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // Handle Fullscreen Resize
  useEffect(() => {
    const onFullScreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (document.fullscreenElement) {
        // Set renderer to fullscreen size
        const width = window.innerWidth;
        const height = window.innerHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      } else {
        // Return to original size
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      }
    };

    document.addEventListener('fullscreenchange', onFullScreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullScreenChange);
  }, []);

  // Prevent fullscreen exit when interacting with the 3D scene
  const handleSceneClick = (event) => {
    event.stopPropagation(); // Prevent the click from propagating to the document and causing fullscreen exit
  };

  return (
    <div
      ref={containerRef}
      style={{
        borderRadius: '15px', // Rounded corners
        overflow: 'hidden',
        border: '2px solid #ccc',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        width: '200px',
        height: '200px',
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: '#f0f0f0',
      }}
      onClick={toggleFullScreen} // Only toggle fullscreen when the container is clicked
    >
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
        }}
        onClick={handleSceneClick} // Prevent fullscreen exit when clicking inside the 3D scene
      />

      {isFullscreen && (
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px',
            borderRadius: '10px',
            maxHeight: '80%',
            overflowY: 'auto',
            width: '300px',
            zIndex: 10,
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                marginBottom: '15px',
                backgroundColor: '#333',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              <h3 style={{ margin: 0, fontSize: '16px' }}>{card.title}</h3>
              <p style={{ fontSize: '14px' }}>{card.content}</p>
            </div>
          ))}
        </div>
      )}

      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px',
        }}
      >
        Click to Fullscreen
      </div>
    </div>
  );
};

export default Teeth;
