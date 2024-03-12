function MyClockTime(){
    const current = new Date();
    const hours = current.getHours();
    const pstyle = {
        backgroundColor : "white",
        color:"black"
    }
    return(
        <p style={pstyle}> {current.toLocaleString()}</p>
    );
}

export default MyClockTime;