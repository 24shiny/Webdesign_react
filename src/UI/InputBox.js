export default function InputBox({type, ph, inputRef, handle_change}) {
  
    return (
    <form className="w-full max-w-sm">
    <div className="flex items-center  py-2">
        <input className="mx-3 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type={type} placeholder={ph} ref={inputRef} onChange={handle_change} aria-label="Full name"/>
        {/* <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
        Enter
        </button>
        <button class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
        Cancel
        </button> */}
    </div>
    </form>
  )
}
