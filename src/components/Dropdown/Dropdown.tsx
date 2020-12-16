import Arrow, { Direction } from '../Arrow';
import React, { useState } from 'react';

import cn from 'classnames';
import styles from './Dropdown.module.css';

const DropdownItem = ({ title, onClick }) => {
    return <div onClick={() => onClick(title)}>{title}</div>;
};

const Dropdown = (props) => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Option1');
    const dropdownClassNames = cn(styles.DropdownMenu, { [styles.Hidden]: !show });

    const onItemClick = (item) => {
        //Set the selected item, and then close the menu
        setSelectedItem(item);
        setShow(false);
    };

    return (
        <div className={styles.Dropdown}>
            <div className={styles.Header} onClick={() => setShow((prev: boolean) => !prev)}>
                <div className={styles.SelectedItemText}> {selectedItem} </div>
                <Arrow direction={show ? Direction.Top : Direction.Bottom} color={'white'} />
            </div>
            <div className={dropdownClassNames}>
                <DropdownItem title="Option1" onClick={onItemClick} />
                <DropdownItem title="Option2" onClick={onItemClick} />
                <DropdownItem title="Option3" onClick={onItemClick} />
                <DropdownItem title="Option4" onClick={onItemClick} />
                <DropdownItem title="Option5" onClick={onItemClick} />
            </div>
        </div>
    );
};

export default Dropdown;
