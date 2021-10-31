import * as THREE from 'three';


export type PosVec2 = {
  x: number,
  y: number,
};

export type PosVec3 = {
  x: number,
  y: number,
  z: number,
};

export type ThreeObject = {
  tag?: string,
  obj: THREE.Mesh | THREE.ArrowHelper | THREE.Sprite,
  objType: 'box' | 'sphere' | 'plane' | 'sprite' | 'arrow' | 'other',
}

export type ThreeObjects = ThreeObject[];