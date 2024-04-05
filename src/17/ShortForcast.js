import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react";
import Select from "../UI/Select";
import getcode from './getcode.json'

export default function ExShortForcast() {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const classfication = "단기예보";
  const [tdata, setTdata] = useState([]); 
  const [trTag, setTrTag] = useState([]);
  const [cate, setCate] = useState([]);
  const sRef = useRef() ;
  const [selTm, setSelTm] = useState([]);
  const [desc, setDesc] = useState();
 
  const getData = (url) => { 
    fetch(url).then(resp=>resp.json()).then(data=>setTdata(data.response.body.items.item));
}

// const getNewData = async(url) =>{ // another way to fetch
//   const resp = await fetch(url);
//   const data = await resp.json();
//   console.log(response.body.items.item)
// }

useEffect(()=>{
  let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${process.env.REACT_APP_API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}&base_time=0500&nx=${x}&ny=${y}`
  // console.log(url);
  getData(url);
},[])

useEffect(()=>{
  // console.log(selTm);
  let tm = selTm.map(item=>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {item.category}
        </td>
        <td claclassNamess="px-6 py-4">
            {`${item.fcstDate.substr(0,4)}-${item.fcstDate.substr(4,2)}-${item.fcstDate.substr(6,2)}`}
        </td>
        <td className="px-6 py-4">
            {`${item.fcstTime.substr(0,2)}:${item.fcstTime.substr(2,2)}`}
        </td>
        <td className="px-6 py-4">
            {item.fcstValue}
        </td>
    </tr>
  )
  setTrTag(tm);
},[selTm])

useEffect(() => {
  if (!tdata) return ;
  let tm2 = tdata.map(item => item.category);
  tm2 = new Set(tm2) ;
  tm2 = [...tm2] ;
  setCate(tm2) ; //  대분류
}, [tdata]);

const handleSelect = () => {
  if (sRef.current.value === '' || sRef.current.value === undefined) return ; 
  let tm3 = tdata.filter(item => item['category'] === sRef.current.value) ;
  setSelTm(tm3);
}

// useEffect(()=>{
//   const description = getcode.filter(item=>item.항목값===sRef.current.value && item.예보구분==="초단기예보")
//   setDesc(description[0].항목명);
// },[selTm])

  return (
<div className="w-full overflow-x-auto">
    <p>{area} {classfication} {dt}</p>
    <Select caption = "---항목선택---"
                      array = {cate}
                      handle_select = {handleSelect}
                      selRef = {sRef} />
    {/* <p>{desc} 정보 :</p> */}
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    항목명
                </th>
                <th scope="col" class="px-6 py-3">
                    예측일자
                </th>
                <th scope="col" class="px-6 py-3">
                    예측시간
                </th>
                <th scope="col" class="px-6 py-3">
                    예측값
                </th>
            </tr>
        </thead>
        <tbody>
            {trTag}
        </tbody>
    </table>
</div>
  )
}
