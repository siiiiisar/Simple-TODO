import { MenuItem, Select } from "@mui/material";

export default function DropDownList({name, options, setData, todoData, data}){
  
  return(
    <select
    id={name}
    name={name}
    value={data.priority}
    onChange={(e) =>setData('priority', e.target.value)}
    className={"border-2 border-gray-200 my-2"}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} >{option.label}</option>
      ))}
    </select>
  );
}