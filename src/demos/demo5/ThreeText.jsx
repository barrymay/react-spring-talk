import React, { useMemo } from "react";
import * as THREE from "three";
import { useLoader, useUpdate } from "react-three-fiber";

export const ThreeText = ({
  children,
  vAlign = "center",
  hAlign = "center",
  size = 1,
  color = "#CCCCCCs",
  ...props
}) => {
  const loadedFont = useLoader(
    THREE.FontLoader,
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/fonts/optimer_bold.typeface.json"
  );
  const config = useMemo(
    () => ({
      font: loadedFont,
      size: 40,
      height: 60,
      curveSegments: 18,
      bevelEnabled: true,
      bevelThickness: 6,
      bevelSize: 2.5,
      bevelOffset: 0,
      bevelSegments: 8
    }),
    [loadedFont]
  );
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3();
      self.geometry.computeBoundingBox();
      self.geometry.boundingBox.getSize(size);
      self.position.x =
        hAlign === "center" ? -size.x / 2 : hAlign === "right" ? 0 : -size.x;
      self.position.y =
        vAlign === "center" ? -size.y / 2 : vAlign === "top" ? 0 : -size.y;
    },
    [children]
  );
  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textBufferGeometry attach="geometry" args={[children, config]} />
        <meshPhysicalMaterial
          color={0xffffff}
          flatShading={true}
          attach="material"
        />
      </mesh>
    </group>
  );
};
