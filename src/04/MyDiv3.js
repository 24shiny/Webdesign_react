export default function MyDiv3(probs) {
  return (
    <div className="w-4/5 h-4/5 m-5 flex justify-center items-center bg-purple-500 text-white">
      <p className="w-4/5 flex justify-start font-bold text-1xl">
      {`${probs.d1} > ${probs.d2} > ${probs.d3}`}</p>
    </div>
  )
}
