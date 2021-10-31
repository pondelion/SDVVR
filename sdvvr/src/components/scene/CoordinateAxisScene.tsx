import React, { useEffect } from 'react';
import * as THREE from 'three';

import ThreeBaseScene, { addObject } from './ThreeBaseScene';
import { ThreeContext, ThreeContextValue } from '../../contexts/Contexts';
import { ObjectFactory as OF } from '../../utils/three/ObjectFactory';


export interface Props {
};


const CoordinateAxisScene: React.FC<Props> = (props: Props) => {

  const contextValue = React.useContext(ThreeContext);
  addObject(contextValue, {
    tag: 'x_axis',
    obj: OF.createArrow(
      'x_axis',
      0, 0, 0,
      1.0, 0.0, 0.0,
      0.5*Math.PI, 0.0, 0,
      6.0, //this._axis_length,
      0xFF0000,
      0.5, //this._axis_length/5,
      0.5, //this._axis_length/5,
    ),
    objType: 'arrow'
  })
  addObject(contextValue, {
    tag: 'y_axis',
    obj: OF.createArrow(
      'y_axis',
      0, 0, 0,
      0.0, 1.0, 0.0,
      0, 0.5*Math.PI, 0,
      6.0,
      0x00FF00,
      0.6, 0.6,
    ),
    objType: 'arrow'
  })
  addObject(contextValue, {
    tag: 'z_axis',
    obj: OF.createArrow(
      'z_axis',
      0, 0, 0,
      0.0, 0.0, 1.0,
      0, 0, 0.5*Math.PI,
      6.0,
      0x0000FF,
      0.6, 0.6,
    ),
    objType: 'arrow'
  })

  return (
    <div>
      <ThreeBaseScene />
    </div>
  )
}

export default CoordinateAxisScene;
