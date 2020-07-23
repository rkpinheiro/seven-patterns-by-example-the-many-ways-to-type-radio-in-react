import React from "react";

const RadioGroup = (props) => <div>{props.children}</div>;

const RadioOption = (props) => {
  return (
    <React.Fragment>
      <input
        name={props.name}
        type="radio"
        checked={props.value === props.selectedValue}
        onChange={props.onChange}
        value={props.value}
      />
      {props.children}
    </React.Fragment>
  );
};

class Pattern2 extends React.Component {
  constructor() {
    super();
    this.state = { tshirt: { size: "xl" } };
  }

  handleChange = (event) => {
    this.setState({ tshirt: { size: event.target.value } });
  };

  render() {
    return (
      <RadioGroup>
        <RadioOption
          value={"m"}
          name={"size"}
          selectedValue={this.state.tshirt.size}
          onChange={this.handleChange}
        >
          M
        </RadioOption>
        <RadioOption
          value={"l"}
          name={"size"}
          selectedValue={this.state.tshirt.size}
          onChange={this.handleChange}
        >
          L
        </RadioOption>
        <RadioOption
          value={"xl"}
          name={"size"}
          selectedValue={this.state.tshirt.size}
          onChange={this.handleChange}
        >
          XL
        </RadioOption>
      </RadioGroup>
    );
  }
}

export default Pattern2;
