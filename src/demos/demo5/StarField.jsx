import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useRender } from "react-three-fiber";

let count = 6000;
export const Starfield = React.memo(() => {
  let group = useRef();
  let coords = useRef([]);
  let theta = 0;
  useRender(() => {
    const s = 1 + THREE.Math.degToRad((theta += 0.05));
    group.current.scale.set(s, s, s);
  });
  const [geo, mat] = useMemo(() => {
    const geo = new THREE.SphereBufferGeometry(1, 10, 10);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("lightblue")
    });
    return [geo, mat];
  }, []);

  if (coords.current.length === 0) {
    coords.current = new Array(count)
      .fill()
      .map(i => [
        Math.random() * 800 - 400,
        Math.random() * 800 - 400,
        Math.random() * 800 - 400
      ]);
  }
  return (
    <group ref={group}>
      {coords.current.map(([p1, p2, p3], i) => {
        return (
          <mesh
            // ref={particleRefs[i]}
            key={i}
            geometry={geo}
            material={mat}
            position={[p1, p2, p3]}
          />
        );
      })}
    </group>
  );
});
