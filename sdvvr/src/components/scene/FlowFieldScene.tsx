import React, { useEffect, useState } from 'react';
import * as THREE from 'three';

import {
  addObject,
  createThreeObjectsFromConfig,
} from './ThreeBaseScene';
import CoordinateAxisScene from './CoordinateAxisScene';
import { ThreeContext } from '../../contexts/Contexts';
import { FlowFieldObjects } from '../../scene_settings/samples/flow_field/FlowFieldObjects';
import { FlowFieldSystem } from '../../simulator/systems/FlowFieldSystem';


export interface Props {
};


const FlowFieldScene: React.FC<Props> = (props: Props) => {

  const [system, setSystem] = useState<FlowFieldSystem>(new FlowFieldSystem());

  const contextValue = React.useContext(ThreeContext);

  contextValue.onUpdate = (dt: number) => {
    system.update(dt);
  }

  if (contextValue.setSimulator !== undefined) {
    contextValue.setSimulator(system);
  }
  const threeObjs = createThreeObjectsFromConfig(FlowFieldObjects);
  threeObjs.map(obj => {addObject(contextValue, obj)});
  console.log(threeObjs)
  //system.start();

  useEffect(() => {
    return () => {
      console.log("clearing all")
      system.stop();
      // clearScene(contextValue);
      contextValue.onUpdate = undefined;
      if (contextValue.setSimulator !== undefined) {
        contextValue.setSimulator(undefined);
      }
    }
  }, [system])

  return (
    <div>
      <CoordinateAxisScene />
    </div>
  )
}

export default FlowFieldScene;
