import React from "react";

const Input = (props) => (
  <input
    type="radio"
    name="size"
    value="xl"
    checked={props.tshirt.size === "xl"}
    onChange={props.handleChange}
  />
);

class Example extends React.Component {
  constructor() {
    super();
    this.state = { tshirt: { size: "xl" } };
  }
  handleChange = (event) => {
    this.setState({ tshirt: { size: event.target.value } });
  };

  render() {
    return (
      <React.Fragment>
        <Input tshirt={this.state.tshirt} handleChange={this.handleChange} />
        XL
      </React.Fragment>
    );
  }
}

export default Example;
