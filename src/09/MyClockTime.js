import { useState, useEffect } from "react";

function MyClockTime(){
    const current = new Date();
    const hours = current.getHours();
    const [ct, setCt] = useState(new Date());
    useEffect(()=>{
        const t = setInterval(()=>{setCt(new Date())},1000);
        return ()=>{clearInterval(t)};
    },[]);

    return(
        <p>{ct.toLocaleString()}</p>
    );
}

export default MyClockTime;