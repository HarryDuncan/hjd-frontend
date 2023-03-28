import useDeviceSize from "hooks/useDeviceSize";
import { useMemo } from "react";
import { OrthographicCamera, PerspectiveCamera } from "three";
import { CameraParams, CameraType, CAMERA_TYPES } from "./types";

export const defaultCameraParams: CameraParams = {
  cameraType: CAMERA_TYPES.PERSPECTIVE_CAMERA as CameraType,
  position: {
    x: 0,
    y: 0,
    z: 2,
  },
  perspectiveCameraProps: {
    fov: 45,
    aspect: 1 / 1,
    near: 0.1,
    far: 1000,
  },
  orthographicCameraProps: {
    frustumSize: 1,
  },
};

export const useCamera = (cameraParams: CameraParams = defaultCameraParams) => {
  const { width, height } = useDeviceSize();
  const formattedCameraParams = {
    ...cameraParams,
    PerspectiveCameraProps: {
      ...cameraParams.perspectiveCameraProps,
      aspect: height / width,
    },
  };
  return useMemo(() => {
    const camera = getCamera(formattedCameraParams);
    const {
      position: { x, y, z },
    } = formattedCameraParams;
    camera.position.set(x, y, z);

    return camera;
  }, [formattedCameraParams]);
};

const getCamera = (cameraParams: CameraParams) => {
  switch (cameraParams.cameraType) {
    case CAMERA_TYPES.ORTHOGRAPHIC_CAMERA: {
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
    case CAMERA_TYPES.PERSPECTIVE_CAMERA:
    default: {
      const {
        perspectiveCameraProps: { fov, aspect, near, far },
      } = cameraParams;
      const camera = new PerspectiveCamera(fov, aspect, near, far);
      return camera;
    }
  }
};
