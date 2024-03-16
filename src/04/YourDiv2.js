import YourDiv3 from "./YourDiv3";

export default function YourDiv2({d1,d2,d3}) {
  return (
    <div className="w-4/5 h-4/5 my-5 py-5 flex flex-col justify-center items-center bg-amber-600 text-white">
      <p className="w-4/5 flex justify-start font-bold text-1xl">
      {`${d1} > ${d2}`}
      </p>
        <YourDiv3 d1 = {d1} d2 = {d2} d3 = {d3}/>
    </div>
  )
}
