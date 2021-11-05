import { Object } from '../../../types/ObjectConfig';


export const FreeFallingObjects: Object[] = [
  {
    "name": "ball1",
    "objType": "sphere",
    "pos": {x: 0.0, y: 0.0, z: 10.0},
    "vel": {x: 0.0, y: 0.0, z: 0.0},
    "rotation": {x: 0.0, y: 0.0, z: 0.0},
    "scale": {x: 1.0, y: 1.0, z: 1.0},
    "color": "#FF0000",
    "mass": 1.0,
    "opacity": 0.8,
  },
  {
    "name": "ground1",
    "objType": "plane",
    "pos": {x: 0.0, y: 0.0, z: 0.0},
    "vel": {x: 0.0, y: 0.0, z: 0.0},
    "rotation": {x: -0.5*Math.PI, y: 0.0, z: 0.0},
    "scale": {x: 10.0, y: 10.0, z: 1.0},
    "color": "#0xffffff",
    "mass": 1.0,
    "opacity": 0.6,
    "textureFilepath": 'https://threejsfundamentals.org/threejs/resources/images/wall.jpg'
  },
];
