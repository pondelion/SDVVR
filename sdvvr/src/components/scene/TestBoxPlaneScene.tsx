import React, { useEffect } from 'react';
import * as THREE from 'three';

import { addObject } from './ThreeBaseScene';
import CoordinateAxisScene from './CoordinateAxisScene';
import { ThreeContext, ThreeContextValue } from '../../contexts/Contexts';
import { ObjectFactory as OF } from '../../utils/three/ObjectFactory';


export interface Props {
};


const TestBoxPlaneScene: React.FC<Props> = (props: Props) => {

  const contextValue = React.useContext(ThreeContext);

  addObject(contextValue, {
    tag: 'box1',
    obj: OF.createTorusKnot(
      0.0, 0.2, 0.0,
      // 0.1, 1, 6.7, 10, 3, 40
    ),
    objType: 'box'
  });
  addObject(contextValue, {
    tag: 'plane1',
    obj: OF.createPlane(
      0, 0, 0,
      -0.5*Math.PI, 0, 0,
      0.6,
      0xffffff,
      10, 10,
      THREE.DoubleSide,
      'https://threejsfundamentals.org/threejs/resources/images/wall.jpg'
    ),
    objType: 'plane'
  });

  return (
    <div>
      <CoordinateAxisScene />
    </div>
  )
}

export default TestBoxPlaneScene;
