import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useInView } from "react-intersection-observer";

import "./App.css";
import Home from "./page/Home/index.jsx";
import NavBar from "./components/NavBar/index.jsx";
import About from "./page/About/index.jsx";
import Skills from "./page/Skills/index.jsx";
import Project from "./page/Project/index.jsx";
import Footer from "./components/Footer/index.jsx";

function App() {
  const home = useInView({ threshold: 0.5 });
  const about = useInView({ threshold: 0.5 });
  const skills = useInView({ threshold: 0.5 });
  const project = useInView({ threshold: 0.5 });

  const ref = useRef(null);
  const ref2 = useRef(null);
  let scene,
    camera,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    renderer,
    container,
    rocket,
    HEIGHT,
    WIDTH;
  useEffect(() => {
    const currentMount = ref.current;
    const conatiner = ref2.current;
    const createScene = () => {
      HEIGHT = conatiner.clientHeight;
      WIDTH = conatiner.clientWidth;

      scene = new THREE.Scene();

      scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

      aspectRatio = WIDTH / HEIGHT;
      fieldOfView = 75;
      nearPlane = 1;
      farPlane = 10000;
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      camera.position.x = 0;
      camera.position.z = 500;
      camera.position.y = -5;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(WIDTH, HEIGHT);

      container = conatiner;
      container.appendChild(renderer.domElement);

      window.addEventListener("resize", handleWindowResize, false);

      let loader = new GLTFLoader();
      loader.load(
        "https://www.stivaliserna.com/assets/rocket/rocket.gltf",
        (gltf) => {
          rocket = gltf.scene;
          rocket.position.y = 10;
          scene.add(rocket);
        }
      );

      const geometry = new THREE.SphereGeometry(15, 32, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.y = -10;
      sphere.position.x = -10;
      scene.add(sphere);
    };

    const handleWindowResize = () => {
      HEIGHT = conatiner.clientHeight;
      WIDTH = conatiner.clientWidth;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
    };

    const createLights = () => {
      const ambientLight = new THREE.HemisphereLight(0x404040, 0x404040, 1);

      const directionalLight = new THREE.DirectionalLight(0xdfebff, 1);
      directionalLight.position.set(-300, 0, 600);

      const pointLight = new THREE.PointLight(0xa11148, 2, 1000, 2);
      pointLight.position.set(200, -100, 50);

      scene.add(ambientLight, directionalLight, pointLight);
    };
    const targetRocketPosition = 40;
    const animationDuration = 4000;

    const loop = () => {
      const t = (Date.now() % animationDuration) / animationDuration;

      renderer.render(scene, camera);
      renderer.setClearColor(0xffffff, 0);

      const delta = targetRocketPosition * Math.sin(Math.PI * 2 * t);
      if (rocket) {
        rocket.rotation.y += 0.01;
        rocket.position.y = delta+10;
      }

      requestAnimationFrame(loop);
    };

    const main = () => {
      createScene();
      createLights();

      //renderer.render(scene, camera);
      loop();
    };

    main();
    return () => {
      conatiner.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  return (
    <div className={`App `} id="app">
      <div className={`App__animation`} ref={ref}>
        <div className="rain rain1"></div>
        <div className="rain rain2">
          <div className="drop drop2"></div>
        </div>
        <div className="rain rain3"></div>
        <div className="rain rain4"></div>
        <div className="rain rain5">
          <div className="drop drop5"></div>
        </div>
        <div className="rain rain6"></div>
        <div className="rain rain7"></div>
        <div className="rain rain8">
          <div className="drop drop8"></div>
        </div>
        <div className="rain rain9"></div>
        <div className="rain rain10"></div>
        <div className="drop drop11"></div>
        <div className="drop drop12"></div>
        <div ref={ref2} className="rocket"></div>
      </div>
      <NavBar
        section={[
          {
            name: "Home",
            state: home.inView,
          },
          {
            name: "About",
            state: about.inView,
          },
          {
            name: "Skills",
            state: skills.inView,
          },
          {
            name: "Project",
            state: project.inView,
          },
        ]}
      />
      <Home param={home.ref} />
      <About param={about.ref} state={about.inView} />
      <Skills param={skills.ref} state={skills.inView} />
      <Project param={project.ref} state={project.inView} />
      <Footer />
    </div>
  );
}

export default App;
