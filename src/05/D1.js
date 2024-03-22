import Descption from "./Descption";
import { useState } from "react";

export default function D1({name, img, des}) {
  // let cnt = 0;

  const [stCnt, setCnt] = useState(0);

  const handle_like = (t) =>{
    // cnt = cnt + 1;
    // console.log(`${t} + ${cnt}`);
    setCnt(stCnt+1);
  }

  return (
    <div className="flex justify-start border-dashed border-2 border-sky-500">
      <div className="flex justify-center items-center w-1/5">
        <img className="w-4/5 h-4/5 rounded-full" src={img} alt={name}/> 
      </div>
      <div className="w-5/6 flex flex-col my-4 mx-3">
        <h1 className="text-2xl font-bold text-slate-700">{name}</h1>
        <p className="text">{des}</p>
        <p onClick={handle_like} className="flex w-full justify-end font-bold text-orange-900 text-xl mx-1 hover:cursor-pointer">LIKE 🥨 
        <span className="mx-2 bg-orange-900 text-white w-6 flex justify-center">
          {stCnt}</span>
        </p>
      </div>
    </div>
  )
}
