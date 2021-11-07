import * as THREE from 'three';

import { Object } from '../../../types/ObjectConfig';


export const FreeFallingObjects: Object[] = [
  {
    "name": "ball1",
    "objType": "sphere",
    "pos": new THREE.Vector3(0.0, 5.0, 0.0),
    "vel": new THREE.Vector3(0.0, 0.0, 0.0),
    "rotation": new THREE.Vector3(0.0, 0.0, 0.0),
    "scale": new THREE.Vector3(0.5, 0.5, 0.5),
    "color": "#FF0000",
    "mass": 1.0,
    "opacity": 0.8,
  },
  {
    "name": "ground1",
    "objType": "plane",
    "pos": new THREE.Vector3(0.0, 0.0, 0.0),
    "vel": new THREE.Vector3(0.0, 0.0, 0.0),
    "rotation": new THREE.Vector3(-0.5*Math.PI, 0.0, 0.0),
    "scale": new THREE.Vector3(20.0, 1.0, 20.0),
    "color": "#0xffffff",
    "mass": 1.0,
    "opacity": 0.6,
    "textureFilepath": 'https://threejsfundamentals.org/threejs/resources/images/wall.jpg'
  },
];
