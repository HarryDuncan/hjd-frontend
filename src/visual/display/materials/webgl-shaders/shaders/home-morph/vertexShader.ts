export const vertexShader = `

  // Common uniforms

  uniform vec2 uResolution;
  uniform float uTime;
  uniform int uLoopCount;
  uniform float uProgress;
  uniform vec2 uPosition;
  attribute float pointIndex;
  attribute vec3 morphPosition_1;
  attribute vec3 morphNormal_1;
  attribute vec3 morphPosition_2;
  attribute vec3 morphNormal_2;
  // Common varyings
  varying vec3 v_position;
  varying vec3 vNormal;
  varying vec2 vUv;
  varying float vPointId;


  void main() {
    vPointId = pointIndex;
    // Calculate the new vertex 

    vec3 currentPosition = position;
    vec3 currentNormal = normal;
    vec3 effect_direction = morphPosition_1 - currentPosition;
    vec3 normal_effect_direction = morphNormal_1 - normal;
    if(uLoopCount == 1){
      currentPosition = morphPosition_1;
      currentNormal = morphNormal_1;
      effect_direction = morphPosition_2 - currentPosition;
      normal_effect_direction = morphNormal_2 - currentNormal;
    }
    if(uLoopCount == 2){
      currentPosition = morphPosition_2;
      currentNormal = morphNormal_2;
      effect_direction = position - currentPosition;
      normal_effect_direction = normal - currentNormal;
    }
  
    vec3 new_position = currentPosition + (effect_direction * (uProgress));
    vec3 new_normal = normal + (normal_effect_direction * (uProgress));
  
    vec4 mv_position =  vec4(new_position,1.0);
    // Save the varyings
 
    // Save the varyings
    v_position = mv_position.xyz;


    gl_PointSize = max(8.0, min(18.0, 18.0 *  (9.0 / position.z)) );
    
  
    // Vertex shader output
    gl_Position = projectionMatrix  *  modelViewMatrix * mv_position;
  }
`;
