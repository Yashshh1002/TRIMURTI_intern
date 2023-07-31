import React from "react";

const Select = () => {
  const [value, setValue] = React.useState("1"); // [state, setState
  return (
    <select
      name="select"
      id="select"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );
};

export default Select;
