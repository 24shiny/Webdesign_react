import React from 'react'
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { HiArrowNarrowDown } from "react-icons/hi";
import { GoDash } from "react-icons/go";

export default function Movie({rank, name, sales, popularity, change}) {
  return (
  <tr className='hover:cursor-pointer hover:bg-lime-200 hover:font-bold'>
    <td className='border-solid border-1 border-blue-950'>{rank}</td>
    <td>{name}</td>
    <td>{parseInt(sales).toLocaleString()}</td>
    <td>{parseInt(popularity).toLocaleString()}</td>
    <td className='flex justify-center'>{change}
    {parseInt(change)>0 ? <HiOutlineArrowSmUp className='text-red-700 text-2xl font-bold' /> : parseInt(change)<0 ? <HiArrowNarrowDown className='text-blue-700 text-2xl font-bold'/> : <GoDash className='text-2xl font-bold' />}
    </td>
  </tr>
  )
}