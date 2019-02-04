import * as React from "react";

import {
  ColorPickerWrapper,
  ColorPicker,
  ColorPickerItem,
  ColorPickerItemWrapper,
  ColorList,
  ColorPickerHelpLabel
} from "./AppointColorPickerCSS";

interface P {
  activeColor: string;
  onColorClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const AppointColorPicker = (props: P) => {
  const labelsColors = ["#FFC0CB", "#FF5656", "#83A3FF", "#70EE9D", "#FFC33C"];
  const labelColorsList = labelsColors.map(color => (
    <ColorPickerItemWrapper
      active={props.activeColor === color}
      onClick={props.onColorClick}
      color={color}
      key={color}
    >
      <ColorPickerItem color={color} />
    </ColorPickerItemWrapper>
  ));
  return (
    <ColorPickerWrapper>
      <ColorPicker>
        <ColorList>{labelColorsList}</ColorList>
        <ColorPickerHelpLabel>pick color for label</ColorPickerHelpLabel>
      </ColorPicker>
    </ColorPickerWrapper>
  );
};

export default AppointColorPicker;
