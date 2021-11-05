import React, { useEffect } from 'react';
import * as THREE from 'three';

import { addObject } from './ThreeBaseScene';
import CoordinateAxisScene from './CoordinateAxisScene';
import { ThreeContext, ThreeContextValue } from '../../contexts/Contexts';
import { ObjectFactory as OF } from '../../utils/three/ObjectFactory';


export interface Props {
};


const BouncingBallScene: React.FC<Props> = (props: Props) => {

  const contextValue = React.useContext(ThreeContext);

  return (
    <div>
      <CoordinateAxisScene />
    </div>
  )
}

export default BouncingBallScene;
