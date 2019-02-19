import * as THREE from "three";

window.THREE = THREE;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

// let width = 500;
// let height = 500;

// const renderTarget = document.getElementById("render-target");
// const resizable = document.getElementById("resizable");

// const renderer = new THREE.WebGLRenderer({ canvas: renderTarget });
// renderer.setSize(width, height);

// const scene = new THREE.Scene();
// window.scene = scene; // For three.js Chrome DevTools inspector

// let mesh;
// const parser = new vox.Parser();
// parser.parse("./chr_fox.vox").then((voxelData) => {
//   console.log("parsed vox");
//   const builder = new vox.MeshBuilder(voxelData, {
//     voxelSize: 1,
//     vertexColor: true,
//   });
//   const material = new THREE.LineBasicMaterial({
//     vertexColors: THREE.VertexColors,
//   });
//   mesh = new THREE.Mesh(builder.geometry, material);
//   // mesh = builder.createMesh();
//   scene.add(mesh);
// });

// function makeCamera() {
//   // const aspect = width / height;
//   // const frustumSize = 2;
//   // const camera = new THREE.OrthographicCamera(
//   //   (frustumSize * aspect) / -2,
//   //   (frustumSize * aspect) / 2,
//   //   frustumSize / 2,
//   //   frustumSize / -2,
//   //   0.1,
//   //   1000
//   // );
//   const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//   camera.position.z = 17;
//   camera.position.y = 8;

//   return camera;
// }

// let camera = makeCamera();

// function onFrame() {
//   requestAnimationFrame(onFrame);
//   const lastWidth = width;
//   const lastHeight = height;

//   const rect = resizable.getBoundingClientRect();
//   width = rect.width;
//   height = rect.height;

//   if (lastWidth !== width || lastHeight !== height) {
//     renderer.setSize(width, height);
//     camera = makeCamera();
//   }

//   if (mesh) {
//     mesh.rotation.y += 0.01;
//   }

//   renderer.render(scene, camera);
// }
// onFrame();
