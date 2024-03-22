export default function Balls({num}) {
    const colorObj = [
        'bg-red-400',
        'bg-yellow-400',
        'bg-green-400',
        'bg-blue-400',
        'bg-violet-400'
    ] 
    const bStyle = `${colorObj[parseInt(num/10)]} p-2 text-xl text-white font-bold p-2 rounded-full border border-solid border-10 border-gray`;
    return (
    <button className={bStyle} >{num}</button>
  )
}