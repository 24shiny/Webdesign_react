// import boxOffice from './BoxOffice.json'
import BrandNewMovie from './BrandNewMovie';
import BrandNewHead from './BrandNewHead';
import BrandNewInfo from './BrandNewInfo';
import InputBox from '../UI/InputBox';
import { useState, useRef } from 'react';

export default function BrandNewBoxOffice() {

  const boxRef = useRef();
  const [getItems, setBoxList] = useState([]); 
  const [st,Setst] = useState('select a movie');

  const getData = (selDate) => {
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
    url = url + `key=${process.env.REACT_APP_MV_KEY}&targetDt=${selDate}`
    fetch(url).then(resp=>resp.json()).then(data=>setBoxList(data.boxOfficeResult.dailyBoxOfficeList));
  }

  const handle_change = () => {
    let selDate = boxRef.current.value.replaceAll('-','');
    getData(selDate);
  }

  return (
    <div>
      <div className='flex justify-end items-center'>
        <span>DATE :</span>
        <InputBox type="date" ph="" inputRef={boxRef} isRequired={true} handle_change ={handle_change}/>
      </div>
    <table className="bg-red-200">
        <BrandNewHead />
        <BrandNewMovie getItems={getItems} Setst={Setst}/>
    </table>
    <BrandNewInfo st={st} />
    </div>
    )
}

