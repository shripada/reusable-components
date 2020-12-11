import Arrow, {Direction} from './Arrow';
import React, {useState} from 'react';

export default {
    title: 'Pokemon/Arrow',
    component: Arrow
};

export const Arrow_1 = () => <Arrow />;


const Wrapper = () => {
  const [direction, setDirection] = useState(Direction.Right)
  return (<div>
    <button style={{marginBottom:'15px'}} onClick={()=>setDirection(prev => (prev+1) % 4)}>Rotate</button>
    <div style={{marginBottom:'15px'}}>{direction}</div>
    <Arrow direction={direction}/>
  </div>)
}

export const WithRotateButton = () => <Wrapper/>

const Wrapper2 = () => {
  const [direction, setDirection] = useState(Direction.Top)
  return (<div>
    <button style={{marginBottom:'15px'}} onClick={()=>setDirection(prev => (prev + 2) % 4) }>Rotate</button>
    <div style={{marginBottom:'15px'}}>{direction}</div>
    <Arrow direction={direction}/>
  </div>)
}

export const WithRotationTopAndBottom = () => <Wrapper2/>