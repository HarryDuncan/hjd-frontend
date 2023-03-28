import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export const loadFont = (fontUrl: string) =>
  new Promise((resolve: (data) => void) => {
    const loader = new FontLoader();
    loader.load(fontUrl, (response) => {
      const data = response.data;
      resolve(data);
    });
  });
