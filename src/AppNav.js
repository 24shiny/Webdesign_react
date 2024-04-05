import Buttons from "./UI/Buttons"
import { useNavigate } from "react-router-dom"

export default function AppNav() {
    const navigator = useNavigate();
  return (
    <div className="my-6 bg-slate-300 p-4">
      <Buttons caption="home" handleClick={()=>{navigator("/")}} />
      <Buttons caption="what to learn" handleClick={()=>{navigator("/description")}} />
      <Buttons caption="Boxoffice with a fixed date" handleClick={()=>{navigator("/newboxoffice")}}/>
      <Buttons caption="Lotto number generator" handleClick={()=>{navigator("/lotto")}}/>
      <Buttons caption="food organization in Busan" handleClick={()=>{navigator("/food")}}/>
      <Buttons caption="statistics on traffic accidents" handleClick={()=>{navigator("/traffic")}} />
      <Buttons caption="brandnewboxoffice" handleClick={()=>{navigator("/brandnewboxoffice")}} />
      <Buttons caption="tourist information" handleClick={()=>{navigator("/gallery")}} />
      <Buttons caption="Busan Festival" handleClick={()=>{navigator("/busanfestival")}}/>
      <Buttons caption="Weather forcast" handleClick={()=>{navigator("/forcast")}}/>
      <Buttons caption="Recoil" handleClick={()=>{navigator("/recoil")}}/>
    </div>
  )
}
