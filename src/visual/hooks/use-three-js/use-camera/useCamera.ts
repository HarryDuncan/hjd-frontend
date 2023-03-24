import useDeviceSize from "hooks/useDeviceSize";
import { useMemo } from "react";
import { OrthographicCamera, PerspectiveCamera } from "three";
import { CameraParams, CameraType } from "./types";

export const defaultCameraParams: CameraParams = {
  cameraType: CameraType.PERSPECTIVE_CAMERA,
  position: {
    x: 0,
    y: 0,
    z: 2,
  },
  perspectiveCameraProps: {
    fov: 45,
    aspect: 1 / 1,
    near: 1,
    far: 1000,
  },
  orthographicCameraProps: {
    frustumSize: 1,
  },
};

export const useCamera = (cameraParams: CameraParams = defaultCameraParams) => {
  const { width, height } = useDeviceSize();
  console.log(width);
  console.log(height);
  const formattedCameraParams = {
    ...cameraParams,
    PerspectiveCameraProps: {
      ...cameraParams.perspectiveCameraProps,
      aspect: width / height,
    },
  };
  return useMemo(() => {
    const camera = getCamera(formattedCameraParams);
    const {
      position: { x, y, z },
    } = cameraParams;
    camera.position.set(x, y, z);

    return camera;
  }, [cameraParams]);
};

const getCamera = (cameraParams: CameraParams) => {
  switch (cameraParams.cameraType) {
    case CameraType.ORTHOGRAPHIC_CAMERA: {
      const {
        orthographicCameraProps: { frustumSize },
      } = cameraParams;

      const camera = new OrthographicCamera(
        frustumSize / -2,
        frustumSize / 2,
        frustumSize / 2,
        frustumSize / -2,
        -1000,
        1000
      );
      return camera;
    }
    case CameraType.PERSPECTIVE_CAMERA:
    default: {
      const {
        perspectiveCameraProps: { fov, aspect, near, far },
      } = cameraParams;
      const camera = new PerspectiveCamera(fov, aspect, near, far);
      return camera;
    }
  }
};
