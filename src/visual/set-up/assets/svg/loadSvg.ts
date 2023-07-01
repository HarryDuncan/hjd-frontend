import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";

export const LoadSvg = async (path: any) =>
  new Promise((resolve: (value: any) => void) => {
    const loader = new SVGLoader();
    loader.load(path, (_data) => {
      // todo - svg loader - waiting until i need to do it
      resolve("");
    });
  });
