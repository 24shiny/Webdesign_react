// import MyClock from './09/MyClock';
// import ClockReview from './09/ClockReview';
// import TrafficMain from "./11/TrafficMain";
// import RefVal from "./12/RefVal";
// import RefInput from "./12/RefInput";
// import BrandNewBoxOffice from "./13/BrandNewBoxOffice";
import GalleryMain from "./14/GalleryMain";
function App() {
  const apiKey = process.env.REACT_APP_MV_KEY;
  console.log(apiKey)
  return (
    <div className="flex flex-col items-center align-middle w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-center my-8">
        <h1 className="font-bold text-2xl">REACT</h1>
      </header>
      <main className="w-4/5 flex justify-center items-center"> 
        <GalleryMain />
      </main>
    </div>
  );
}
// const App = () =>{ //without using the "function" keyword
//   return();
// }
export default App;
