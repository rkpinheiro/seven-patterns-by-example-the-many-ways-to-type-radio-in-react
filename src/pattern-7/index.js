import React from "react";

/** 
 * Solution 7: RadioGroup dynamically creates RadioOption
 * This might be the most rarely seen solution which might make it seem a bit exotic. 
 * We add a little twist to the previously mentioned compound component pattern by mixing it with the FaaC solution. 
 * This gives us a RadioGroup which passes down “patched” RadioOptions through its children prop.
 * This gives us the ability to nest just as with our context and FaaC based solutions without imposing any of their stated problems. 

 * The pattern has been discussed in a (tweet)[https://twitter.com/dferber90/status/935476667673440257] 
 * and is also used within an older version of (react-radio-group)[https://github.com/chenglou/react-radio-group/tree/9a992f3bbc1bffeb1dc993e42b0f4842ab299f42]. 

 * It mixes both the FaaC and compound component patterns to an extend where the RadioOption is dynamically assembled in the RadioGroup 
 * for use in the children function only needing the value.

*/
const RadioOption = ({name, value, selectedValue, onChange, children}) => (
  <React.Fragment>
    <input
      name={name}
      type="radio"
      checked={value === selectedValue}
      onChange={onChange}
      value={value}
    />
    {children}
  </React.Fragment>
);

const RadioGroup = (name, value, onChange, children) => {
  return props.children({
    RadioOption: ({ children, value }) => (
      <RadioOption
        name={name}
        selectedValue={value}
        onChange={onChange}
        value={value}
      >
        {children}
      </RadioOption>
    ),
  });
};

class Pattern7 extends React.Component {
  constructor() {
    super();
    this.state = { tshirt: { size: "xl" } };
  }

  handleChange = (event) => {
    const {value} = event.target
    this.setState({ tshirt: { size: value } });
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
