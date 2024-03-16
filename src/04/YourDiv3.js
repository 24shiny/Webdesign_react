export default function YourDiv3({d1,d2,d3}) {
    return (
      <div className="w-4/5 h-4/5 m-5 flex justify-center items-center bg-yellow-300 text-white">
        <p className="w-4/5 flex justify-start font-bold text-1xl">
        {`${d1} > ${d2} > ${d3}`}</p>
      </div>
    )
  }
  