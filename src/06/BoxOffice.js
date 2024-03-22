import boxOffice from './BoxOffice.json'
import Movie from './Movie';
import { useState } from 'react';
import { HiOutlineArrowSmUp, HiArrowNarrowDown } from "react-icons/hi";
import { GoDash } from "react-icons/go";

export default function BoxOffice() {

  const [st,Setst] = useState('select a movie');
  const [st2,Setst2] = useState('select a movie');

  const handle_movie = (i) => {
    console.log(i);
    Setst(i.openDt);
    Setst2(i.openDt);
  }

  const getItems = boxOffice.boxOfficeResult.dailyBoxOfficeList
  const boItems = getItems.map( item =>   
      <tr key={item.rank} onClick={()=>{handle_movie(item)}} className='hover:cursor-pointer hover:bg-lime-200 hover:font-bold'>
        <td className='border-solid border-1 border-blue-950'>{item.rank}</td>
        <td>{item.movieNm}</td>
        <td>{parseInt(item.salesAmt).toLocaleString()}</td>
        <td>{parseInt(item.audiCnt).toLocaleString()}</td>
        <td className='flex justify-center'>{item.rankInten}{parseInt(item.rankInten)>0 ? <HiOutlineArrowSmUp className='text-red-700 text-2xl font-bold' /> : parseInt(item.change)<0 ? <HiArrowNarrowDown className='text-blue-700 text-2xl font-bold'/> : <GoDash className='text-2xl font-bold' />}</td>
      </tr>
  );
      
  const boItems2 = getItems.map(item => 
  <Movie onClick={()=>{handle_movie(item)}} rank={item.rank} name={item.movieNm} sales={item.salesAmt} popularity={item.audiCnt} change={item.rankInten} data={item.openDt} key={item.movieNm}/>);
  
    return (
    <div className='border-solid decoration-sky-950'>
    <table className="w-full mx-5  border-solid border-2, border-black">
      <thead>
          <tr className='border-solid border-1 border-black'>
          <th>순위</th>
          <th>영화명</th>
          <th>매출액</th>
          <th>관객수</th>
          <th>증감률</th>
          </tr>
      </thead>
      <tbody> {/* add movies */}
        {boItems} 
        {boItems2} 
      </tbody>
    </table>
    <div>
      {`released on ${st}`}
    </div>
    <div>
      {`released on ${st2}`}
    </div>
    </div>
    )
}

