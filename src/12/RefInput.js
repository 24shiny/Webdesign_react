import InputBox from "../UI/InputBox"
import Buttons from "../UI/Buttons"
import { useState, useRef, useEffect } from "react"

export default function RefInput() {
    const inputRef = useRef(0);
    const [bts, setBts] = useState([]); // captions of buttons
    const [tags, setTags] = useState([]);

    const handle_enter = () =>{
        if(inputRef.current.value === ''){
            alert("enter a value");
            inputRef.current.focus();
            return;
        }
        setBts([...bts, inputRef.current.value]);
    }

    useEffect(() => {
        inputRef.current.value = '';
        inputRef.current.focus();
        let tm = bts.map((item,idx)=>
            <Buttons caption={item} key={`bt${idx}`} />
        ) // make all buttons every time ab new one is added
        setTags(tm);
    }, [bts]);

    const handle_cancle = () =>{
        inputRef.current.value = '';
        inputRef.current.focus();
        setBts([]); // clear inputs
    }

  return (
    <>
    <div className="flex flex-col gap-5">
        <div className="flex items-center border-b border-t border-black py-2" >
            <InputBox type="text" ph="Enter an input" inputRef={inputRef} isRequired={true}/>
            {/* <input className="mx-3 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
            type="text" placeholder="ENTER AN INPUT" ref={inputRef} aria-label="Full name"/> */}
            <Buttons caption={"ENTER"} handleClick={handle_enter}/>
            <Buttons caption={"CANCLE"} handleClick={handle_cancle}/>
        </div>
        <div>
            <p className="my-3">Entered inputs read :</p>{tags}
        </div>
    </div>
    </>
  )
}
