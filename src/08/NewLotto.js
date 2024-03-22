import React from 'react'
import Buttons from '../UI/Buttons';
import Balls from '../UI/Balls';
import { useState } from 'react';

export default function NewLotto() {
    
    const [st,Setst] = useState(0);
    const [st2,Setst2] = useState(0);
    let nArry = []; 
    const handleClick = () => {
              
        while(nArry.length<7){
            let n = Math.floor(Math.random() * 46) + 1;
            // exclude overlapped values
            if(!nArry.includes(n)) {
                nArry.push(n); 
                
            }
            // console.log(nArry);
            Setst(nArry);
            // ballArrar = nArry.map((item)=>
            //     <Balls num={item}/>
            // );
            console.log(st[0]);
            // ballArrar = st.map((item)=>
            //     <Balls num={item}/>
            // );            
        };

        nArry.splice(6,0,'+');
            const ballArrar = nArry.map((item,idx)=>
            idx===6? <span className='font-bold font-2xl'>{item}</span> :
            <Balls num={item} key={item}/>
            );
        Setst2(ballArrar);

        // put the map function into the setter
        // Setst2(nArry.map((item,idx)=>
        // idx===6? <span className='font-bold font-2xl'>{item}</span> :
        // <Balls num={item} key={item}/>
        // ));
    };
    
  return (
    <section>
        <h1 className='flex justify-center font-bold underline'>LOTTO NUMBER GENERATOR</h1>
    <div className='flex justify-evenly my-5'>
      {/* {ballArrar} */}
      <Balls num={st[0]}/>
      <Balls num={st[1]}/>
      <Balls num={st[2]}/>
      <Balls num={st[3]}/>
      <Balls num={st[4]}/>
      <Balls num={st[5]}/>
      <Balls num={st[6]}/>
    </div>
    <div>{st2}</div>
    <div className='flex justify-center my-5'>
        <Buttons caption='generate numbers' handleClick={handleClick} />
    </div>
    </section>
  )
}
