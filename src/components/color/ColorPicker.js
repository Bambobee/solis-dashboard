/* eslint-disable react/prop-types */
import React from 'react';
import { HexColorPicker } from 'react-colorful';

import UseClickOutside from 'hooks/CustomeHook';

function ColorPicker(props) {
  UseClickOutside(props.popover, props.close);

  return (
    <div className="z-50">
      {props.isOpen && <HexColorPicker onClick={props.close} className="z-40" />}
    </div>
  );
}

export default ColorPicker;
