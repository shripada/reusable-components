import Arrow, { Direction } from '../Arrow';
import React, { useState } from 'react';

import cn from 'classnames';
import styles from './Dropdown.module.css';

const Dropdown = (props) => {
    const [show, setShow] = useState(false);
    const dropdownClassNames = cn(styles.DropdownMenu, { [styles.Hidden]: !show });
    return (
        <div className={styles.Dropdown}>
            <div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
                <div className={styles.SelectedItemText}> Selected Item text </div>
                <Arrow direction={show ? Direction.Top : Direction.Bottom} color={'white'} />
            </div>
            <div className={dropdownClassNames}>
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
                <div>Option 4</div>
                <div>Option 5</div>
            </div>
        </div>
    );
};

export default Dropdown;
