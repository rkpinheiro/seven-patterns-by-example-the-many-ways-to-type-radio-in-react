import React from "react";

const RadioGroup = (props) =>
  props.options.map((option, index) => {
    return (
      <React.Fragment key={index}>
        <input
          name={props.name}
          onChange={props.onChange}
          checked={props.selectedValue === option.value}
          value={option.value}
          type={"radio"}
        />
        {option.label}
      </React.Fragment>
    );
  });

class Pattern1 extends React.Component {
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
        name="size"
        selectedValue={this.state.tshirt.size}
        onChange={this.handleChange}
        options={[
          { label: "M", value: "m" },
          { label: "L", value: "l" },
          { label: "XL", value: "xl" },
        ]}
      />
    );
  }
}

export default Pattern1;
