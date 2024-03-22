import React from 'react'
import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'

export default function NewCard({cardData}) {
  
  const [st,Setst] = useState(false);
  const show_num = () => {
    Setst(!st);
  }
  
  return (
    <div onClick={show_num} className='hover:cursor-pointer flex border-solid border-2 border-blue-500 my-2 mx-2 p-5'>
    <div className='w-1/5 mx-3 flex justify-center items-center'>
        {cardData.구분==='광역지원센터' ? <img src={busan} alt={busan} /> : cardData.구분==='기초푸드뱅크' ? <img src={bank} alt={bank} /> : <img src={market} alt={market} />}
    </div>
    <div className='w-4/5'>
        <h1 className='font-bold'>사업장명 : {cardData.사업장명}</h1>
        <h2>운영주체명 : {cardData.운영주체명}</h2>
        <h3>소재지 : {cardData['사업장 소재지']}</h3>
        {/* when clicked, show its phone number */}
        <div className='bg-yellow-200 w-full'>
          {st && cardData['연락처(대표번호)']}
        </div>
    </div>
    </div>
  )
}
