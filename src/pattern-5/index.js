import React from "react";

const RadioGroup = (props) => {
  return props.children({
    name: props.name,
    onChange: props.onChange,
    selectedValue: props.value,
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

class Pattern5 extends React.Component {
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
        {({ name, onChange, selectedValue }) => (
          <React.Fragment>
            <RadioOption
              name={name}
              selectedValue={selectedValue}
              onChange={onChange}
              value={"m"}
            >
              M
            </RadioOption>
            <RadioOption
              name={name}
              selectedValue={selectedValue}
              onChange={onChange}
              value={"l"}
            >
              L
            </RadioOption>
            <RadioOption
              name={name}
              selectedValue={selectedValue}
              onChange={onChange}
              value={"xl"}
            >
              XL
            </RadioOption>
          </React.Fragment>
        )}
      </RadioGroup>
    );
  }
}

export default Pattern5;
