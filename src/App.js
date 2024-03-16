// import './App.css';
// import MainHeader from './01/MainHeader';
// import Greeting from './01/Greeting';
// import MyClock from './MyClock';
// import Morning from './03/Morning';
// import logo from './logo.svg'
import { AiFillAndroid } from "react-icons/ai";
import { RiHome7Line } from "react-icons/ri";
// import { DiJava } from "react-icons/di";
// import { DiHtml5 } from "react-icons/di";
// import { DiJavascript1 } from "react-icons/di";
import MyDiv1 from './04/MyDiv1';
import YourDiv1 from "./04/YourDiv1";
import Descption from "./05/Descption";

function App() {
  const apiKey = process.env.REACT_APP_MV_KEY;
  console.log(apiKey)
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10">
        <div className='flex items-center'><AiFillAndroid className='text-2xl bg-lime-400 '/>Let's practice react<AiFillAndroid /></div>
        <div><RiHome7Line /></div>
      </header>
      <main className="w-full h-screen">
        {/* <MyDiv1 />
        <YourDiv1 /> */}
        <Descption />
        {/* <div>
          <img src={logo} alt='logo'></img>
          
        </div> */}
        {/* <section>
          <div className='flex jus'>
            <li><DiJava />Java</li>
            <li><DiHtml5 />HTML</li>
            <li><DiJavascript1 />JavaScript</li>
            <li></li>
          </div>
        </section> */}
      </main>
      {/* <footer className='flex justify-center items-center'>
        Copyright &copy; All rights reserved.
      </footer> */}
    </div>
  );
}
// const App = () =>{ //without using the "function" keyword
//   return();
// }
export default App;
