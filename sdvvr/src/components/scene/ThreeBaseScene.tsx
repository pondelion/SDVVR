import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';

import { ThreeContext, ThreeContextValue } from '../../contexts/Contexts';
import { OrbitControls } from '../../utils/three/OrbitControls';
import { VRButton } from '../../utils/three/VRButton';
import { ThreeObject } from '../../types/Three';


// export interface Props {
//   width: number,
//   height: number,
//   cameraPos: PosVec3,
//   onObjectsChanged?: (objs: ThreeObjects) => void,
//   lookAt?: PosVec3,
//   bgColor?: THREE.Color,
//   onUpdate?: (dt: number) => void,
//   objects?: ThreeObjects,
// };
export interface Props {
};


export const addObject = (contextValue: ThreeContextValue, obj: ThreeObject) => {
  if (contextValue.objects === undefined) { return; }
  for (let i = 0; i < contextValue.objects?.length; i++) {
    const obj2 = contextValue.objects[i];
    console.log(`${obj2.tag} : ${obj.tag}`)
    if (obj2.tag === obj.tag) {
      return;
    }
  }
  contextValue.objects?.push(obj);
}


export const clearScene = (contextValue: ThreeContextValue) => {
  if (contextValue.objects === undefined) { return; }
  contextValue.objects = [];
}


const ThreeBaseScene: React.FC<Props> = (props: Props) => {
  console.log('ThreeBaseScene')

  const contextValue = React.useContext(ThreeContext);

  const _lookAt = contextValue.lookAt === undefined ?
        new THREE.Vector3(0, 0, 0) :
        new THREE.Vector3(contextValue.lookAt.x, contextValue.lookAt.y, contextValue.lookAt.z);

  const [container, setContainer] = React.useState<HTMLDivElement|null>(null);
  const [scene, setScene] = React.useState<THREE.Scene>(new THREE.Scene());
  const [camera, setCamera] = React.useState<THREE.PerspectiveCamera>(
    new THREE.PerspectiveCamera(
      45,
      contextValue.width / contextValue.height,
      0.1,
      1000
    )
  );
  const [lookAt, setLookAt] = React.useState<THREE.Vector3>(_lookAt);
  const [renderer, setRenderer] = React.useState<THREE.WebGLRenderer>(new THREE.WebGLRenderer({ antialias: true }));
  const [bgColor, setBgColor] = React.useState<THREE.Color>(
    contextValue.bgColor === undefined ? new THREE.Color('#b4bad2') : contextValue.bgColor
  );
  const [clock, setClock] = React.useState<THREE.Clock>(new THREE.Clock());
  const [cnt, setCnt] = React.useState<number>(0);
  const [orbitControls, setOrbitControls] = React.useState<OrbitControls|null>(null);
  // const [objects, setObjects] = React.useState<ThreeObjects>([]);

  camera.position.x = contextValue.cameraPos.x;
  camera.position.y = contextValue.cameraPos.y;
  camera.position.z = contextValue.cameraPos.z;
  camera.lookAt(new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z));
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
    console.log(contextValue.objects)
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
      const _orbitControls = new OrbitControls(camera, container);
      _orbitControls.target.set(0, 0, 0);
      _orbitControls.update();
      setOrbitControls(_orbitControls);
    }
    renderer.setAnimationLoop(() => {
      setCnt(cnt+1);
      update(clock.getDelta());
      renderer.render(scene, camera);
    })
    ReactDOM.render(<div id='vr_button'/>, document.body.appendChild(VRButton.createButton( renderer )));
  }, [container, clock, renderer, scene, camera])

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
