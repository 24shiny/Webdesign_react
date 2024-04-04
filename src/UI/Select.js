export default function Select({caption,array,handle_select,selRef}) {
  const tags = array.map((item)=>
    <option key={item} value={item}>{item}</option>
  );
  return (
    <select onChange={handle_select} ref={selRef}>
        <option>{caption}</option>
        {tags}
    </select>
  )
}
