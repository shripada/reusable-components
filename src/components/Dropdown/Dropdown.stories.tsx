import Dropdown from './Dropdown';
import React from 'react';

export default {
title: 'Pokemon/Dropdown',
component: Dropdown,
};

export const Dropdown_1 = () => (
  <div>
    <Dropdown />
    <input type="text" id="fname" name="fname" style={{marginTop:'16px'}}/>
  </div>

);