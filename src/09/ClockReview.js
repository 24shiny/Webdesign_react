import React from 'react'
import { useState, useEffect } from 'react';

export default function ClockReview() {
    // basics 
    let timer = setTimeout(function(){
        document.write('hello');
    },1000);
    clearTimeout(timer);

    let interval = setInterval(function(){
        document.write('two second passed');
    },2000);
    clearInterval(interval);

    // usestate and effect
    // useEffect runs on every render. That means that when the count changes, 
    // a render happens, which then triggers another effect
    const [count, setCount] = useState(0);
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    },[]);

    // 1. no dependency passed
    useEffect(() => {
        //Runs on every render
      });
    
    // 2. an empty array
    useEffect(() => {
        //Runs only on the first render
      }, []);
    
    // 3. props or state values
    // useEffect(() => {
    //     //Runs on the first render
    //     //And any time any dependency value changes
    //   }, [prop, state]);

    // (example) timer
    // const current = new Date();
    // const hours = current.getHours();
    const [ct, setCt] = useState(new Date());
    useEffect(()=>{
        // update the current tiem object every second
        const t = setInterval(()=>{setCt(new Date())},1000);
        return ()=>{clearInterval(t)};
    },[]);

  return (
    <div>
      {timer}
      {interval}
      <h1>I've rendered {count} times!</h1>
      {ct.toLocaleString()}
    </div>
  )
}
