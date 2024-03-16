import YourDiv2 from "./YourDiv2";

export default function YourDiv1() {
    const d1 ='Your div1';
    const d2 = 'Your div2';
    const d3 = 'Your div3';

  return (
    <div className="w-4/5 h-4/5 my-5 py-5 flex flex-col justify-center items-center bg-amber-900 text-white">
      <p className="w-4/5 flex justify-start font-bold text-1xl">{d1}
      </p>
      <YourDiv2 d1 = {d1} d2 = {d2} d3 = {d3} />
    </div>
  )
}
