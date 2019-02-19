import React, { useRef } from "react";
import { WebGLRenderer } from "three";
import useAnimationFrame from "./useAnimationFrame";

export default function Renderer({ scene, camera, width, height }) {
  const canvasRef = useRef(null);
  const rendererRef = useRef(null);

  useAnimationFrame(() => {
    const canvas = canvasRef.current;
    if (canvas == null) return;

    if (rendererRef.current == null) {
      const renderer = new WebGLRenderer({ canvas });
      rendererRef.current = renderer;
    }
    const renderer = rendererRef.current;

    renderer.setSize(width, height);
    renderer.render(scene, camera);
  });

  return (
    <canvas
      ref={canvasRef}
      style={{
        width,
        height,
      }}
    />
  );
}
