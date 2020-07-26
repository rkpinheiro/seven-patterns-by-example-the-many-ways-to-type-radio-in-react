import React from "react";

const RadioGroup = (props) => {
  const getOptionsProps = () => ({
    name: props.name,
    onChange: props.onChange,
    selectedValue: props.value,
  });
  return props.children({
    getOptionsProps,
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

class Pattern6 extends React.Component {
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
        {({ getOptionsProps }) => (
          <React.Fragment>
            <RadioOption {...getOptionsProps()} value={"m"}>
              M
            </RadioOption>
            <RadioOption {...getOptionsProps()} value={"l"}>
              L
            </RadioOption>
            <RadioOption {...getOptionsProps()} value={"xl"}>
              XL
            </RadioOption>
          </React.Fragment>
        )}
      </RadioGroup>
    );
  }
}

export default Pattern6;
