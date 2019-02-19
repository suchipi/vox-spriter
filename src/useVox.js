import { useState, useRef } from "react";
import { LineBasicMaterial, Mesh, VertexColors } from "three";

function useVoxData(path) {
  const [data, setData] = useState(null);
  if (data == null) {
    console.log("Parsing " + path);
    const parser = new vox.Parser();
    parser.parse(path).then((voxelData) => {
      console.log("Parsed " + path);
      setData(voxelData);
    });
  }

  return data;
}

export default function useVox(path, callback) {
  const meshRef = useRef(null);
  const voxelData = useVoxData(path);
  if (voxelData && meshRef.current == null) {
    const builder = new vox.MeshBuilder(voxelData, {
      voxelSize: 1,
      vertexColor: true,
    });
    const material = new LineBasicMaterial({
      vertexColors: VertexColors,
    });
    const mesh = new Mesh(builder.geometry, material);
    // const mesh = builder.createMesh();
    meshRef.current = mesh;
    callback(mesh);
  }

  return meshRef.current;
}
