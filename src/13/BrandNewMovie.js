import React from 'react'
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { HiArrowNarrowDown } from "react-icons/hi";
import { GoDash } from "react-icons/go";



export default function BrandNewMovie({getItems,Setst}) {

    const handle_movie = (i) => {
        console.log(i);
        Setst(i.openDt);
      }

    const boItems = getItems.map(item =>
    <tr onClick={()=>{handle_movie(item)}} className='hover:cursor-pointer hover:bg-lime-200 hover:font-bold'>
        <td className='border-solid border-1 border-blue-950'>{item.rank}</td>
        <td>{item.movieNm}</td>
        <td>{parseInt(item.salesAmt).toLocaleString()}</td>
        <td>{parseInt(item.audiCnt).toLocaleString()}</td>
        <td className='flex justify-center'>{item.rankInten}
        {parseInt(item.rankInten)>0 ? <HiOutlineArrowSmUp className='text-red-700 text-2xl font-bold' /> : parseInt(item.rankInten)<0 ? <HiArrowNarrowDown className='text-blue-700 text-2xl font-bold'/> : <GoDash className='text-2xl font-bold' />}
        </td>
    </tr>
    );

    return (
        <tbody>{boItems}</tbody>
  )
}