import React, { useState } from "react";
import { Scene, OrthographicCamera, PerspectiveCamera } from "three";
import Renderer from "./Renderer";
import useVox from "./useVox";
import useRefWithInitializer from "./useRefWithInitializer";

export default function App() {
  const width = 300;
  const height = 300;
  const [rotation, setRotationState] = useState(Math.PI / 4);

  const scene = useRefWithInitializer(() => {
    const scene = new Scene();
    window.scene = scene; // For three.js Chrome DevTools inspector
    return scene;
  }).current;

  const orthoCamera = useRefWithInitializer(() => {
    const camera = new OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      Number.MAX_VALUE
    );

    camera.position.z = 17;
    camera.position.y = 8;

    camera.zoom = 10;
    camera.updateProjectionMatrix();

    return camera;
  }).current;
  const perspCamera = useRefWithInitializer(() => {
    const camera = new PerspectiveCamera(75, width / height, 1, 1000);

    camera.position.z = 17;
    camera.position.y = 8;

    return camera;
  }).current;

  const mesh = useVox("./chr_fox.vox", (mesh) => {
    mesh.rotation.y = rotation;
    scene.add(mesh);
  });

  const setRotation = (newRot) => {
    setRotationState(newRot);
    if (mesh) {
      mesh.rotation.y = newRot;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <Renderer
          width={width}
          height={height}
          scene={scene}
          camera={orthoCamera}
        />
        <Renderer
          width={width}
          height={height}
          scene={scene}
          camera={perspCamera}
        />
      </div>
      <label style={{ display: "inline-flex", alignItems: "center" }}>
        <span style={{ marginRight: 4 }}>Rotation</span>
        <input
          type="range"
          min={0}
          max={2 * Math.PI}
          step={0.001}
          value={rotation}
          onChange={(event) => {
            setRotation(event.target.value);
          }}
        />
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <button aria-label="Up" onClick={() => setRotation(Math.PI)}>
            &nbsp;
          </button>
        </div>
        <div>
          <button
            aria-label="Up-Left"
            onClick={() => setRotation(Math.PI + Math.PI / 4)}
          >
            &nbsp;
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            aria-label="Up-Right"
            onClick={() => setRotation(Math.PI / 2 + Math.PI / 4)}
          >
            &nbsp;
          </button>
        </div>
        <div>
          <button
            aria-label="Left"
            onClick={() => setRotation(2 * Math.PI - Math.PI / 2)}
          >
            &nbsp;
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <button aria-label="Right" onClick={() => setRotation(Math.PI / 2)}>
            &nbsp;
          </button>
        </div>
        <div>
          <button
            aria-label="Down-Left"
            onClick={() => setRotation(2 * Math.PI - Math.PI / 4)}
          >
            &nbsp;
          </button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button
            aria-label="Down-Right"
            onClick={() => setRotation(Math.PI / 4)}
          >
            &nbsp;
          </button>
        </div>
        <div>
          <button aria-label="Down" onClick={() => setRotation(0)}>
            &nbsp;
          </button>
        </div>
      </div>
    </div>
  );
}
