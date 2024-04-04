import InputBox from "../UI/InputBox";
import { useEffect, useRef, useState } from "react";
import Select from "../UI/Select";
import Buttons from "../UI/Buttons";
import getxy from "./getxy.json";
import { useNavigate } from "react-router-dom";

export default function ForcastMain() { 
    const navigator = useNavigate() ;
    const ops = getxy.map(item => item['1단계']) ;
  
    const [x, setX] = useState();
    const [y, setY] = useState();
    const [area, setArea] =useState();
    const [dt, setDt] = useState();
  
    const dRef = useRef() ;
    const sRef = useRef() ;
   
    const handleDate = () => {
      setDt(dRef.current.value.replaceAll('-', '')) ;
    }
  
    useEffect(()=>{
        console.log("dt : ", dt);
    },setDt)
    //초단기예보
    const handleUtra = () => {
      if (dt === '' || dt === undefined) {
        alert('날짜를 선택하세요.') ;
        dRef.current.focus();
        return;
      }
      if (area === '' || area === undefined) {
        alert('지역을 선택하세요.') ;
        sRef.current.focus();
        return;
      }
  
      navigator(`/exshortforcast/${dt}/${area}/${x}/${y}`) ;
    }
  
      //초단기예보
      const handleShort = () => {
        if (dt === '' || dt === undefined) {
          alert('날짜를 선택하세요.') ;
          dRef.current.focus();
          return;
        }
        if (area === '' || area === undefined) {
          alert('지역을 선택하세요.') ;
          sRef.current.focus();
          return;
        }
    
        navigator(`/shortforcast/${dt}/${area}/${x}/${y}`) ;
        
      }

    const handleArea = () => {
      if (sRef.current.value === '' || sRef.current.value === undefined) return ; 
      
      let tm = getxy.filter(item => item['1단계'] === sRef.current.value) ;
      setArea(sRef.current.value);
      setX(tm[0]["격자 X"]) ;
      setY(tm[0]["격자 Y"]) ;
    }
  
    useEffect(() => {
      console.log(x, y)
    } , [x, y]) ;
    return (
      <div className="w-11/12 justify-start 
                      grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div>
          <InputBox type = "date"
                     inputRef = {dRef}
                     ph ="날짜선택"
                     handle_change ={handleDate}/>
        </div>
        <div>
          <Select caption = "---지역선택---"
                      array = {ops}
                      handle_select = {handleArea}
                      selRef = {sRef} />
        </div>
        <div>
        <Buttons caption = "초단기예보"
                    handleClick = {handleUtra} 
                    /> 
        </div>
        <div>
        <Buttons caption = "단기예보"
                   handleClick = {handleShort}    
                    /> 
        </div>
      </div>
    )
  }