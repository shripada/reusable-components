import React from 'react';
import styles from './Arrow.module.css';

export enum Direction {
  Right = 0,
  Bottom ,
  Left,
  Top 
}


export interface ArrowProps {
  direction: Direction,
  color: string
}
const Arrow = ({direction = Direction.Right, color="blue"}: ArrowProps) => {
    //border-right: 1px solid red;
    const borderRight = `1px solid ${color}`
    const borderTop = borderRight; 
    const degrees = [45, 135, 225, -45 ]
    const degree = degrees[direction]  //direction * 90 + 45; 
    const rotationNeeded = `rotate(${degree}deg`
    return <div className={styles.Arrow} style={{transform:rotationNeeded, borderRight, borderTop}}></div>;
};


export default Arrow;
