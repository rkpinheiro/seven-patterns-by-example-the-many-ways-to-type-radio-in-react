import React from "react";

const RadioGroup = (props) =>
  React.Children.map(props.children, (child) => {
    if (child.type === RadioOption) {
      return React.cloneElement(child, {
        isChecked: props.value === child.props.value,
        name: props.name,
        onChange: props.onChange,
      });
    }
    return child;
  });

const RadioOption = (props) => {
  return (
    <React.Fragment>
      <input
        name={props.name}
        type="radio"
        checked={props.isChecked}
        onChange={props.onChange}
        value={props.value}
      />
      {props.children}
    </React.Fragment>
  );
};

class Pattern3 extends React.Component {
  constructor() {
    super();
    this.state = { tshirt: { size: "xl" } };
  }

  handleChange = (event) => {
    this.setState({ tshirt: { size: event.target.value } });
  };

  render() {
    return (
      <RadioGroup
        name={"size"}
        value={this.state.tshirt.size}
        onChange={this.handleChange}
      >
        <RadioOption value={"m"}>M</RadioOption>
        <RadioOption value={"l"}>L</RadioOption>
        <RadioOption value={"xl"}>XL</RadioOption>
      </RadioGroup>
    );
  }
}

export default Pattern3;
