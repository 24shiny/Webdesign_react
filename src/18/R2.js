import R3 from "./R3"
import { useRecoilValue } from "recoil"
import { rcnt2 } from "./RAtom"
export default function R2() {
    const cnt2 = useRecoilValue(rcnt2);

  return (
    <div className="w-4/5 bg-slate-400">
      recoil2 : {cnt2}
      <R3 />
    </div>
  )
}
