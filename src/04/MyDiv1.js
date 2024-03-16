import MyDiv2 from "./MyDiv2";

export default function MyDiv1() {
    const d1 ='My div1';
    const d2 = 'My div2';
    const d3 = 'My div3';

  return (
    <div className="w-4/5 h-4/5 py-5 flex flex-col justify-center items-center bg-orange-400 text-white">
      <p className="w-4/5 flex justify-start font-bold text-1xl">{d1}
      </p>
      <MyDiv2 d1 = {d1} d2 = {d2} d3 = {d3} />
    </div>
  )
}
