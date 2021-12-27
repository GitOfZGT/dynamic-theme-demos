import React from "react";

import { SketchPicker } from "react-color";

import cssClass from "./ReactColorPicker.module.less";

class SketchExample extends React.Component {
  state = {
    displayColorPicker: false,
    color: this.props.defaultColor || {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    this.props.onChange(color);
  };

  render() {
    return (
      <div style={{display:"inline-block",verticalAlign:"middle"}}>
        <div className={cssClass["picker-swatch"]} onClick={this.handleClick}>
          <div
            style={{
              background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
            }}
            className={cssClass["picker-color"]}
          />
        </div>
        {this.state.displayColorPicker ? (
          <div className={cssClass["picker-popover"]}>
            <div
              className={cssClass["picker-cover"]}
              onClick={this.handleClose}
            />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SketchExample;
