import { ObjectType, Vec3 } from './Three';


export type Object = {
  name: string,
  objType: ObjectType,
  pos: Vec3,
  vel: Vec3,
  mass: number,
  rotation: Vec3,
  scale: Vec3,
  color: number | string,
  opacity?: number,
  textureFilepath?: string,
}