import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock(){
    return (
        <div className="flex flex-col">
        <MyClockImage />
        <div><MyClockTime /></div>
        </div>
    );
}

export default MyClock;