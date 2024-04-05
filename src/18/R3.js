import Buttons from "../UI/Buttons"
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil"
import { rcnt } from "./RAtom"

export default function R3() {

    const cnt = useRecoilValue(rcnt)
    const setCnt = useSetRecoilState(rcnt)
    // const [cnt, setCnt] = useRecoilState(rcnt)
    const handle_increase = () => {
        setCnt(cnt+1)
    }
    return (
      <div className="w-4/5 bg-slate-600">
        recoil3
        <Buttons caption='increase' handleClick={handle_increase} />
      </div>
    )
  }
  