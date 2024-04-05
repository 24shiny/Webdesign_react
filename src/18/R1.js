
import R2 from "./R2";
import { useRecoilValue } from "recoil";
import { rcnt } from "./RAtom";

export default function R1() {
    const cnt = useRecoilValue(rcnt)
  return (
    <div className="w-full bg-slate-200">
      recoil1 : {cnt}
      <R2 />
    </div>
  )
}
