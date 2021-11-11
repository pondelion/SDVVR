import * as THREE from 'three';

import { Object } from '../../../types/ObjectConfig';


const XYZ_MAX = 7.0;
export const FlowFieldObjects: Object[] = [
  {
    "name": "box1",
    "objType": "box",
    "pos": new THREE.Vector3(0.0, 0.0, 0.0),
    "vel": new THREE.Vector3(0.0, 0.0, 0.0),
    "rotation": new THREE.Vector3(0.0, 0.0, 0.0),
    "scale": new THREE.Vector3(2*XYZ_MAX, 2*XYZ_MAX, 2*XYZ_MAX),
    "color": "#FF0000",
    "mass": 1.0,
    "opacity": 0.5,
    "textureFilepath": 'https://threejsfundamentals.org/threejs/resources/images/wall.jpg'
  },
];

export const N_PARTICLES = 100;
const VEL_MAX = 3.0;
for (let i = 0; i < N_PARTICLES; ++i) {
  FlowFieldObjects.push(
    {
      "name": `shpere${i}`,
      "objType": "sphere",
      "pos": new THREE.Vector3(
        2.0*(XYZ_MAX-1.0)*(Math.random()-0.5),
        2.0*(XYZ_MAX-1.0)*(Math.random()-0.5),
        2.0*(XYZ_MAX-1.0)*(Math.random()-0.5),
      ),
      "vel": new THREE.Vector3(
        2.0*(VEL_MAX)*(Math.random()-0.5),
        2.0*(VEL_MAX)*(Math.random()-0.5),
        2.0*(VEL_MAX)*(Math.random()-0.5),
      ),
      "rotation": new THREE.Vector3(0.0, 0.0, 0.0),
      "scale": new THREE.Vector3(0.2, 0.2, 0.2),
      "color": "#FF0000",
      "mass": 1.0,
      "opacity": 0.8,
    },
  )
}
