import { Mesh } from "three";

const fallParams = {
  bottom: -6,
  top: 5,
};

export const fall = (mesh: Mesh, time: number, direction = -1) => {
  mesh.position.x +=
    Math.sin(1.26 * time * 0.003 * (1.03 + 0.5 * Math.cos(0.21))) * 0.02;
  mesh.position.y += 0.07 * direction;
  mesh.position.z +=
    Math.cos(1.32 * time * 0.01 * Math.sin(0.92 + 0.53)) * 0.007;
  if (direction === -1) {
    if (mesh.position.y < fallParams.bottom) {
      mesh.position.y = fallParams.top;
    }
  } else if (mesh.position.y > fallParams.top) {
    mesh.position.y = fallParams.bottom;
  }
};
