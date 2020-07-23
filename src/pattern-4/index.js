import React from "react";

const RadioContext = React.createContext();

class RadioGroup extends React.Component {
  createContextValue = (value, name, onChange) => ({
    value,
    name,
    onChange,
  });

  render() {
    return (
      <RadioContext.Provider
        value={this.createContextValue(
          this.props.value,
          this.props.name,
          this.props.onChange
        )}
      >
        {this.props.children}
      </RadioContext.Provider>
    );
  }
}

class RadioOption extends React.Component {
  render() {
    return (
      <RadioContext.Consumer>
        {(radioGroup) => (
          <>
            <input
              type="radio"
              name={radioGroup.name}
              checked={radioGroup.value === this.props.value}
              onChange={radioGroup.onChange}
              value={this.props.value}
            />
            {this.props.children}
          </>
        )}
      </RadioContext.Consumer>
    );
  }
}

class Pattern4 extends React.Component {
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

export default Pattern4;
