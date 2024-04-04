import Buttons from "../UI/Buttons"
import { useNavigate } from "react-router-dom"

export default function RoutNav() {
    const navigator = useNavigate();
  return (
    <>
    {/* first way */}
    {/* <div>
        <ul>
            <li><Link to='/home'>home</Link></li>
            <li><Link to='/page1'>page1</Link></li>
            <li><Link to='/page2'>page2</Link></li>
        </ul>
    </div> */}
    {/* second way - in the form of event <- need a Hook*/}
    <div>
      <Buttons caption="home" handleClick={()=>{navigator("/")}} />
      <Buttons caption="page1" handleClick={()=>{navigator("/page1")}}/>
      <Buttons caption="pase2" handleClick={()=>{navigator("/page2?item1=apple&item2=banana&item3=melon")}}/>
    </div>
    </>
  )
}
