export default function Buttons({caption, handleClick}) {
    return (
    <button className="bg-amber-300 mx-1 font-bold p-2 rounded-md border border-dashed border-5 border-black hover:bg-red-500 hover:text-white" onClick={handleClick}>{caption}</button>
  )
}