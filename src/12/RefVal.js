import { useState, useEffect, useRef } from "react";
import Buttons from "../UI/Buttons"

export default function RefVal() {
    let cnt = 0;
    const [stCnt, setStCnt] = useState(0);
    const refCnt = useRef(0);

    const handle_local = () =>{
        cnt = cnt + 1;
        console.log("cnt : ", cnt);
    }
    const handle_state = () =>{
        setStCnt(stCnt+1);
    }
    useEffect(()=>{
        console.log(stCnt);
    },[stCnt])

    const handle_reference = () =>{
        refCnt.current = refCnt.current + 1;
        console.log(refCnt.current);
    }

  return (
    <div className='grid grid-cols-3 gap-3'>
      <div>component variables(local ones) : {cnt}</div>
      <div>state variables : {stCnt}</div>
      <div>reference variables : {refCnt.current}</div>
      <div>
      <Buttons caption={"component variables"} handleClick={handle_local}/>
      </div>
      <div>
      <Buttons caption={"state variables"} handleClick={handle_state}/>
      </div>
      <div>
      <Buttons caption={"reference variables"} handleClick={handle_reference}/>
      </div>
    </div>
  )
}
