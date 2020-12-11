import React from 'react';
import styles from './Arrow.module.css';

export enum Direction {
  Right = 0,
  Bottom ,
  Left,
  Top 
}
export interface ArrowProps {
  direction: Direction
}
const Arrow = ({direction = Direction.Right}: ArrowProps) => {
    const degrees = [45, 135, 225, -45 ]
    const degree = degrees[direction]  //direction * 90 + 45; 
    const rotationNeeded = `rotate(${degree}deg`
    return <div className={styles.Arrow} style={{transform:rotationNeeded}}></div>;
};


export default Arrow;
