export default function Buttons({caption, handleClick}) {
    return (
    <button className="bg-teal-300 mx-1 font-bold p-2 rounded-md  hover:bg-red-500 hover:text-white" onClick={handleClick}>{caption}</button>
  )
}