import * as THREE from 'three';


export type Vec2 = {
  x: number,
  y: number,
};

export type Vec3 = {
  x: number,
  y: number,
  z: number,
};

export type ObjectType = 'box' | 'sphere' | 'plane' | 'sprite' | 'arrow' | 'other';

export type ThreeObject = {
  tag?: string,
  obj: THREE.Mesh | THREE.ArrowHelper | THREE.Sprite,
  objType: ObjectType,
}

export type ThreeObjects = ThreeObject[];