// import MainHeader from "./MainHeader";
import logo from '../logo.svg';
import colock from '../02Clock/colock.png'
// 
function MyClockImage(){
    return (
    // <MainHeader />
    <>
    <img src={colock} alt="logo" />
    {/* className="App-logo" for rotation */}
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Learn React */}
    </a>
    </>
    );
}

export default MyClockImage;