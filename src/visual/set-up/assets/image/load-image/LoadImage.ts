import { ImageLoader } from "three";

export const loadImage = (path: string) =>
  new Promise((resolve: (value: any) => void) => {
    const textureLoader = new ImageLoader();
    textureLoader.load(path, (data) => {
      resolve(data);
    });
  });
