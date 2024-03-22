import Buttons from "../UI/Buttons";
export default function TrafficNav({title, category, sel, setSel}) {
  const handleBtClick = (item) => {
    setSel(item) ;
  }
  
  const bts = category.map(item => 
      <Buttons caption = {item}
                  handleClick ={() => handleBtClick(item)} />
  );  
  
  return (
    <div className="flex items-center">
      <div className="mx-5 font-bold text-white bg-slate-700 w-35 px-2 py-4">
        교통사고 {title}
      </div>
      <div>
        {bts}
      </div>
    </div>
  )
}