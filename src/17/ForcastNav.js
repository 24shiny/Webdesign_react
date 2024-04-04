import Buttons from "../UI/Buttons"
import { useNavigate } from "react-router-dom"

export default function ForcastNav() {
    const navigator = useNavigate();
  return (
    <div>
      <Buttons caption="home" handleClick={()=>{navigator("/")}} />
      <Buttons caption="단기예보" handleClick={()=>{navigator("/short")}}/>
      <Buttons caption="초단기예보" handleClick={()=>{navigator("/exshort")}}/>
    </div>
  )
}
