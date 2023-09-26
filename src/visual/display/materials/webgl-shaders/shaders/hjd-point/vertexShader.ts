export const vertexShader = `

  attribute float randomBool;
  attribute float randomBool2;
  attribute float pointIndex;
  varying float vPointId;
  varying float vRandom;
  varying float vRandom2;


  void main() {

    vRandom2 = randomBool2;
    vec3 currentPosition = position;
    vec4 mv_position =  vec4(position,1.0);
    
    
    gl_PointSize = 20.0;
  
    // Vertex shader output
    gl_Position = projectionMatrix  *  modelViewMatrix * mv_position;
  }
`;
