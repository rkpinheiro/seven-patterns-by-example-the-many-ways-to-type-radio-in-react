import React from "react";

const RadioGroup = (props) => {
  return props.children({
    RadioOption: ({ children, value }) => (
      <RadioOption
        name={props.name}
        selectedValue={props.value}
        onChange={props.onChange}
        value={value}
      >
        {children}
      </RadioOption>
    ),
  });
};

const RadioOption = (props) => (
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

class Pattern7 extends React.Component {
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
        {({ RadioOption }) => (
          <React.Fragment>
            <RadioOption value={"m"}>M</RadioOption>
            <RadioOption value={"l"}>L</RadioOption>
            <RadioOption value={"xl"}>XL</RadioOption>
          </React.Fragment>
        )}
      </RadioGroup>
    );
  }
}

export default Pattern7;
