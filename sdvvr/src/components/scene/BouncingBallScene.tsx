import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

import {
  addObject,
  createThreeObjectsFromConfig,
  clearScene,
  findThreeObj,
} from './ThreeBaseScene';
import CoordinateAxisScene from './CoordinateAxisScene';
import { ThreeContext } from '../../contexts/Contexts';
import { FreeFallingObjects } from '../../scene_settings/samples/free_falling/FreeFallingObjects';
import { BouncingBallSystem } from '../../simulator/systems/BouncingBallSystem';
import { ThreeObject } from '../../types/Three';


export interface Props {
};

//const system = new BouncingBallSystem();

const BouncingBallScene: React.FC<Props> = (props: Props) => {

  const [system, setSystem] = useState<BouncingBallSystem>(new BouncingBallSystem());
  const [ballThreeObj, setBallThreeObj] = useState<ThreeObject|null>(null);
  const [groundThreeObj, setGroundThreeObj] = useState<ThreeObject|null>(null);

  const contextValue = React.useContext(ThreeContext);

  contextValue.onUpdate = (dt: number) => {
    system.update(dt);
    if (ballThreeObj !== null && ballThreeObj?.obj !== null) {
      const ballHeight = system.getBallHeight();
      ballThreeObj.obj.position.y = ballHeight;
      ballThreeObj.obj.scale.y = 2*system.getBallRadius();
      ballThreeObj.obj.scale.x = 2*system.getBallRadius();
      ballThreeObj.obj.scale.z = 2*system.getBallRadius();
    }
    if (groundThreeObj !== null && groundThreeObj?.obj !== null) {
      groundThreeObj.obj.position.y = system.getGroundHeight();
    }
  }

  if (contextValue.setSimulator !== undefined) {
    contextValue.setSimulator(system);
  }
  const threeObjs = createThreeObjectsFromConfig(FreeFallingObjects);
  threeObjs.map(obj => {addObject(contextValue, obj)});
  console.log(threeObjs)
  //system.start();

  useEffect(() => {
    setBallThreeObj(findThreeObj(contextValue, "ball1"));
    setGroundThreeObj(findThreeObj(contextValue, "ground1"));
    console.log("useef")
    return () => {
      console.log("clearing all")
      system.stop();
      // clearScene(contextValue);
      contextValue.onUpdate = undefined;
      if (contextValue.setSimulator !== undefined) {
        contextValue.setSimulator(undefined);
      }
    }
  }, [system, ballThreeObj])

  return (
    <div>
      <CoordinateAxisScene />
    </div>
  )
}

export default BouncingBallScene;
