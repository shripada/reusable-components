import Arrow, { Direction } from '../Arrow';
import React, { useState } from 'react';

import cn from 'classnames';
import styles from './Dropdown.module.css';

export interface DropdownOption {
   title: string,
}
export interface DropdownProps {
  options: DropdownOption [],
  selectedOption: DropdownOption,
  onItemSelected: Function 
}

const DropdownItem = ({ title, onClick }) => {
    return <div className={styles.Option} onClick={() => onClick(title)}>{title}</div>;
};

const Dropdown = ({options, selectedOption, onItemSelected}: DropdownProps) => {
    const [active, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Option1');
    const dropdownClasses = cn(styles.Dropdown, {[styles.Active]: active})
    const menuClasses = cn(styles.Menu, { [styles.Active]: active });
    
    const onItemClick = (item) => {
        //Set the selected item, and then close the menu
        setSelectedItem(item);
        setActive(false);
    };

    return (
       <div className={styles.DropdownContainer}>
          <div className={dropdownClasses}>
              <div className={styles.Header} onClick={() => setActive((prev: boolean) => !prev)}>
                  <div className={styles.SelectedItemText}> {selectedItem} </div>
                  <Arrow direction={active ? Direction.Top : Direction.Bottom} color={'#212121'} />
              </div>
              <div className={menuClasses}>
                  <DropdownItem title="Option1" onClick={onItemClick} />
                  <DropdownItem title="Option2" onClick={onItemClick} />
                  <DropdownItem title="Option3" onClick={onItemClick} />
                  <DropdownItem title="Option4" onClick={onItemClick} />
                  <DropdownItem title="Option5" onClick={onItemClick} />
                  <DropdownItem title="Option1" onClick={onItemClick} />
              </div>
          </div>
        </div>
    );
};

export default Dropdown;
