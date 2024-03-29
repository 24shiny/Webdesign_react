import { useState, useEffect, useRef } from "react" ;
import BusanFestivalCard from "./BusanFestivalCard";

export default function TrafficMain() {
  const [tdata, setTdata] = useState() ;  //전체 fetch 데이터(17개배열)
  const [c1, setC1] = useState() ;        //대분류(중복제거)
  const [c1Option, setC1Option] = useState([]);
  const selRef = useRef();
  const [c2, setC2] = useState() ;

  const getDataFetch = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.getFestivalKr.item))
  }

  useEffect(()=>{
    let url= `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=UCYaXlpjGxS5%2FJ7h7qX2GEhKDTusFAoSB2pd1hTL585cgbYuYn9DD9YoKIRw%2Fu4xuTjbPlpAIExBWecfsD2XXg%3D%3D&pageNo=1&numOfRows=100&resultType=json`
    // console.log(url);
    getDataFetch(url);
  }, []);

  useEffect(() => {
    if (!tdata) return ;
    let tm = tdata.map(item => item.GUGUN_NM);
    tm = new Set(tm) ;
    tm = [...tm] ;
    // console.log(tm);
    setC1(tm) ; //  대분류
    const options = tm.map((item,idx)=>{
        return <option key={idx} value={item}>{item}</option>
    })
    // console.log(options);
    setC1Option(options);
  }, [tdata]);

  //구가 선택됐을 때 
  useEffect(()=>{
    if (!tdata) return ;
    console.log(c1);
  },[c1])

  const handle_select = () => {
    let selC1 = selRef.current.value;
    console.log(selC1);
    let tm2 = tdata.filter(item => item.GUGUN_NM===selC1);
    let tags = tm2.map((item)=>{
        return <BusanFestivalCard className="my-5" exampleLink={item} />
    })
    setC2(tags);
  }

  return (
    <div className="flex flex-col justify-center">
        <div className="flex justify-center my-5">
        <select onChange={handle_select} ref={selRef}>
            <option value="0">구를 선택하세요 : </option>
            {c1Option}
        </select>
        </div>
        <div>{c2}</div>
    </div>

  )
}