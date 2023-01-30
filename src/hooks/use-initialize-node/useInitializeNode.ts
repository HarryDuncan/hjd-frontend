import { useEffect, useState } from "react";
import { WebGLRenderer } from "three";
import { CSS3DRenderer } from "three/examples/jsm/renderers/CSS3DRenderer";
import { ContainerNode } from "visuals/interfaces";

export const useInitializeNode = (
  containerRef: ContainerNode,
  renderer: WebGLRenderer | CSS3DRenderer
) => {
  const [isNodeInitialized, setIsInitialized] = useState<boolean>(false);
  useEffect(() => {
    if (containerRef?.current && !isNodeInitialized) {
      const container = containerRef.current as HTMLElement;
      setIsInitialized(true);
      container.appendChild(renderer.domElement);
    }
  }, [containerRef, renderer, isNodeInitialized]);
};
