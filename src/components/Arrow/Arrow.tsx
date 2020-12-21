<<<<<<< HEAD
=======
// import PropTypes from 'prop-types';
// import React from 'react';
// import styles from './Arrow.module.css';

// const Arrow = (props) => {
//     return <div className={styles.Arrow}></div>;
// };

// Arrow.propTypes = {};

// export default Arrow;

>>>>>>> 1a1c96e7c0b7730a0e629b33e3e06902be4a65af
import React from 'react';
import styles from './Arrow.module.css';

export enum Direction {
  Right = 0,
  Bottom ,
  Left,
  Top 
}
<<<<<<< HEAD


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
=======
export interface ArrowProps {
  direction: Direction
}
const Arrow = ({direction = Direction.Right}: ArrowProps) => {
    const degrees = [45, 135, 225, -45 ]
    const degree = degrees[direction]  //direction * 90 + 45; 
    const rotationNeeded = `rotate(${degree}deg`
    return <div className={styles.Arrow} style={{transform:rotationNeeded}}></div>;
>>>>>>> 1a1c96e7c0b7730a0e629b33e3e06902be4a65af
};


export default Arrow;
