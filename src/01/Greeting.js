import './Greeting.css';

function Greeting() {
    let n = Math.floor(Math.random()*99+1) + 1;
    // if(n<10){
    //     n = '0' + n
    // }
    const st1 = { // inline style must take the Object type(~dic)
        backgroundColor:"blue",
        color:"white"
    };

    return (
        // how to apply styles
        // conditional rendering
        <h1>
        <span style={st1}>hello</span>
        <span style={{display:"inline-flex",margin:"10px",color:"black"}}>
            {n<10 ? `0${n}`: n}</span> 
        {n%2===0 ? <span style={{color:"red"}}>even</span> : <span style={{color:"blue"}}>odd</span>}
        {n%2===0 && "🍕"}
        {n%2===1 && "🍔"}     
        </h1>
    ); 
}

export default Greeting;