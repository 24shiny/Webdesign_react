import { useState } from "react";

export default function Select({array,handle_select,selRef}) {
  const [addOptions, setAddOptions] = useState([]);
  const tempOptions = array.map((item,idx)=>{
    return <option key={idx} value={item}>{item}</option>
  })
  setAddOptions(tempOptions);

  return (
    <select onChange={handle_select} ref={selRef}>
    <option>구를 선택하세요 : </option>
    {addOptions}
</select>
  )
}
