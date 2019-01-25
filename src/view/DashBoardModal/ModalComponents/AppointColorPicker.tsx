import * as React from "react";

import {
  ColorPickerWrapper,
  ColorPicker,
  ColorPickerItem,
  ColorPickerItemWrapper,
  ColorList,
  ColorPickerHelpLabel
} from "../MakeAnAppointmentCSS";

interface Props {
  activeColor: string;
  onColorClick: (e: React.MouseEvent<HTMLElement>) => void;
}

class AppointColorPicker extends React.Component<Props, {}> {
  public render() {
    const labelsColors = [
      "#FFC0CB",
      "#FF5656",
      "#83A3FF",
      "#70EE9D",
      "#FFC33C"
    ];
    const labelColorsList = labelsColors.map(color => (
      <ColorPickerItemWrapper
        active={this.props.activeColor === color}
        onClick={this.props.onColorClick}
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
  }
}

export default AppointColorPicker;
