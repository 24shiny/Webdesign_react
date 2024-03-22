import boxOffice from './BoxOffice.json'
import { useState } from 'react';
import NewMovie from './NewMovie';
import NewHead from './NewHead';
import NewInfo from './NewInfo';

export default function NewBoxOffice() {

  const [st,Setst] = useState('select a movie');
  const getItems = boxOffice.boxOfficeResult.dailyBoxOfficeList
  
  return (
    <div>
    <table className="bg-lime-300">
        <NewHead />
        <NewMovie getItems={getItems} Setst={Setst}/>
    </table>
    <NewInfo st={st} />
    </div>
    )
}

