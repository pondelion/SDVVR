import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import { ThreeContext, ThreeContextValue } from '../../contexts/Contexts';
import { OrbitControls } from '../../utils/three/OrbitControls';
import { VRButton } from '../../utils/three/VRButton';
import { ThreeObject } from '../../types/Three';
import { Object } from '../../types/ObjectConfig';
import { ObjectFactory as OF } from '../../utils/three/ObjectFactory';


export interface Props {
};


export const addObject = (contextValue: ThreeContextValue, obj: ThreeObject) => {
  if (contextValue.objects === undefined) { return; }
  for (let i = 0; i < contextValue.objects?.length; i++) {
    const obj2 = contextValue.objects[i];
    if (obj2.tag === obj.tag) {
      return;
    }
  }
  contextValue.objects?.push(obj);
}


export const createThreeObjectsFromConfig = (objs: Object[]): ThreeObject[] => {
  const threeObjs: ThreeObject[] = [];
  objs.forEach(obj => {
    if (obj.objType === "sphere") {
      threeObjs.push({
        tag: obj.name,
        obj: OF.createSphere(
          obj.pos.x, obj.pos.y, obj.pos.z,
          obj.scale.x,
          obj.opacity,
          obj.color,
          THREE.FrontSide,
          obj.textureFilepath
        ),
        objType: obj.objType
      })
    } else if (obj.objType === "plane") {
      threeObjs.push({
        tag: obj.name,
        obj: OF.createPlane(
          obj.pos.x, obj.pos.y, obj.pos.z,
          obj.rotation.x, obj.rotation.y, obj.rotation.z,
          obj.opacity,
          obj.color,
          obj.scale.x, obj.scale.z,
          THREE.DoubleSide,
          obj.textureFilepath
        ),
        objType: obj.objType
      })
    }

  });
  return threeObjs;
}


export const clearScene = (contextValue: ThreeContextValue) => {
  if (contextValue.objects === undefined) { return; }
  contextValue.objects = [];
}


export const findThreeObj = (contextValue: ThreeContextValue, tag: string): ThreeObject|null => {
  if (contextValue.objects === undefined) {
    return null;
  }
  for (let i = 0; i < contextValue.objects?.length; ++i) {
    if (contextValue.objects[i].tag === tag) {
      return contextValue.objects[i];
    }
  }
  return null;
}


const ThreeBaseScene: React.FC<Props> = (props: Props) => {
  console.log('ThreeBaseScene')

  const contextValue = React.useContext(ThreeContext);

  const _lookAt = contextValue.lookAt === undefined ?
        new THREE.Vector3(0, 0, 0) :
        new THREE.Vector3(contextValue.lookAt.x, contextValue.lookAt.y, contextValue.lookAt.z);

  const [container, setContainer] = React.useState<HTMLDivElement|null>(null);
  const [scene, setScene] = React.useState<THREE.Scene>(new THREE.Scene());
  // const [camera, setCamera] = React.useState<THREE.PerspectiveCamera>(
  //   new THREE.PerspectiveCamera(
  //     45,
  //     contextValue.width / contextValue.height,
  //     0.1,
  //     1000
  //   )
  // );
  const [lookAt, setLookAt] = React.useState<THREE.Vector3>(_lookAt);
  const [renderer, setRenderer] = React.useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer({ antialias: true }));
  const [bgColor, setBgColor] = React.useState<THREE.Color>(
    contextValue.bgColor === undefined ? new THREE.Color('#b4bad2') : contextValue.bgColor
  );
  const [clock, setClock] = React.useState<THREE.Clock>(new THREE.Clock());
  const [cnt, setCnt] = React.useState<number>(0);
  const [orbitControls, setOrbitControls] = React.useState<OrbitControls|null>(null);
  // const [objects, setObjects] = React.useState<ThreeObjects>([]);

  // contextValue.camera.position.x = contextValue.camera.position.x;
  // contextValue.camera.position.y = contextValue.camera.position.y;
  // contextValue.camera.position.z = contextValue.camera.position.z;
  contextValue.camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
  // setCamera(camera); NG

  renderer.setSize(contextValue.width, contextValue.height);
  renderer.setClearColor(bgColor);
  renderer.shadowMap.enabled = true;

  const update = (dt: number): void => {
    if (contextValue.onUpdate) {
      contextValue.onUpdate(dt);
    }
  }

  const onReset = (): void => {
    // Reset objects
    scene.remove.apply(scene, scene.children);
    if (contextValue.objects) {
      contextValue.objects.map(obj => scene.add(obj.obj));
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 2.0, 100, Math.PI / 4, 1);
    spotLight.position.set(2, 7, 2);
    spotLight.castShadow = true;
    scene.add(spotLight);
  }

  useEffect(() => {
    console.log('useeffect')
    if (container) {
      container.appendChild(renderer.domElement);
      const _orbitControls = new OrbitControls(contextValue.camera, container);
      _orbitControls.target.set(0, 0, 0);
      _orbitControls.update();
      setOrbitControls(_orbitControls);
    }
    renderer.setAnimationLoop(() => {
      setCnt(cnt+1);
      update(clock.getDelta());
      renderer.render(scene, contextValue.camera);
    })
    ReactDOM.render(<div id='vr_button'/>, document.body.appendChild(VRButton.createButton( renderer )));
  }, [container, clock, renderer, scene, contextValue.camera])

  useEffect(() => {
    console.log('useeffect2')
    onReset();
  }, [contextValue.objects])

  return (
    <div>
      <div
        style={{ width: contextValue.width, height: contextValue.height }}
        ref={(container) => { setContainer(container) }}
      />
      <div id='vr_button'/>
    </div>
  )
}

export default ThreeBaseScene;
