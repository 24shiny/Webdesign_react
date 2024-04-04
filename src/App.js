import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyClock from "./09/MyClock";
import AppNav from "./AppNav";
import Descption from "./05/Descption"
import NewBoxOffice from "./07/NewBoxOffice"
import NewLotto from "./08/NewLotto";
import NewCardMain from "./10/NewCardMain"
import TrafficMain from "./11/TrafficMain"
import BrandNweBoxOffice from "./13/BrandNewBoxOffice"
import GalleryMain from "./14/GalleryMain"
import BusanFestivalMain from "./15/BusanFestivalMain"
import ForcastMain from "./17/ForcastMain";
import ShortForcast from "./17/ShortForcast";
import ExShortForcast from "./17/ExShortForcast";

function App() {
  const apiKey = process.env.REACT_APP_MV_KEY;
  console.log(apiKey)
  return (
    <BrowserRouter>
    <div className="flex flex-col items-center align-middle w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex flex-col justify-center my-8">
        <h1 className="flex justify-center font-bold text-2xl">REACT</h1>
        <AppNav />
      </header>
      {/* add navigation */}
      
      <main className="w-4/5 flex justify-center items-center"> 
        <Routes>
          <Route path="/" element={<MyClock />} />
          <Route path="/description" element={<Descption />} />
          <Route path="/newboxoffice" element={<NewBoxOffice />} />
          <Route path="/lotto" element={<NewLotto />} />
          <Route path="/food" element={<NewCardMain />} />
          <Route path="/traffic" element={<TrafficMain />} />
          <Route path="/brandnewboxoffice" element={<BrandNweBoxOffice />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/busanfestival" element={<BusanFestivalMain />} />
          <Route path="/forcast" element={<ForcastMain />} />
          <Route path="/shortforcast/:dt/:area/:x/:y" element={<ShortForcast />} />
          <Route path="/exshortforcast/:dt/:area/:x/:y" element={<ExShortForcast />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
    </BrowserRouter>
  );
}
// const App = () =>{ //without using the "function" keyword
//   return();
// }
export default App;
