import { useState, useEffect } from "react" ;
// import BusanFestivalCard from "../15/BusanFestivalCard";

export default function TrafficMain() {
  const [tdata, setTdata] = useState() ;  //전체 fetch 데이터(17개배열)
  const [c1, setC1] = useState() ;        //대분류(중복제거)
  const [selC1, setSelC1] = useState() ;  //선택된 대분류
  const [c2, setC2] = useState() ;        //대분류(중복제거)
  const [selC2, setSelC2] = useState() ;  //선택된 대분류
  const [detail, setDetail] = useState() ; //상세정보
  const [sendMsg, setMsg] = useState() ;

  const getDataFetch = (url) =>{
    fetch(url)
    .then(resp => resp.json())
    .then(data => setTdata(data.data))
    .catch(err => console.log(err)) ;

  }

  useEffect(()=>{
    // let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?` ;
    // url = `${url}page=1&perPage=20&` ;
    // url = `${url}serviceKey=${process.env.REACT_APP_APIKEY}`;
    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=20&serviceKey=UCYaXlpjGxS5%2FJ7h7qX2GEhKDTusFAoSB2pd1hTL585cgbYuYn9DD9YoKIRw%2Fu4xuTjbPlpAIExBWecfsD2XXg%3D%3D'
    // console.log(url)
    getDataFetch(url) ;
    console.log(tdata);
  }, []);

  useEffect(() => {
    if (!tdata) return ;
    let tm = tdata.map(item => item.사고유형_대분류);
    tm = new Set(tm) ;
    tm = [...tm] ;
    // console.log("tdata tm => ", tm)  
    setC1(tm) ; //  대분류
  }, [tdata]);

  useEffect(()=>{
    if (!tdata) return ;
    // console.log(selC1);
    //대분류가 c1으로 선택되면 c2를 만들기
    let tm2 = tdata.filter(item => item.사고유형_대분류===selC1).map((item)=>item.사고유형_중분류);
    setC2(tm2) ; // 중분류
  },[selC1])

  useEffect(()=>{
    if (!tdata) return ;
    let tm3 = tdata.filter(item => item.사고유형_대분류===selC1 && item.사고유형_중분류===selC2);
    let tm3Arr = tm3[0]
    setDetail(tm3Arr)
    let msg = `사고건수 : ${tm3Arr.사고건수}, 사망자수 :${tm3Arr.사망자수}, 중상자수 :${tm3Arr.중상자수}, 경상자수 :${tm3Arr.경상자수}`
    setMsg(msg);
  },[selC2])

  useEffect(()=>{
    const keyArr = ['사고건수','사망자수','중상자수','경상자수','부상신고자수'];
    
    let rawInfo = keyArr.map((item)=>detail.item)
    
    setInfo(rawInfo);
  },[detail])

  return (
    <div className="flex flex-col my-5 p-10 h-1/3 align-middle border-solid border-slate-950 border-2 border-bold">
     {c1 && <TrafficNav title = "대분류"
                  category = {c1}
                  sel = {selC1}
                  setSel = {setSelC1}  />
     }
    <div className="my-4">
      {c2 && <TrafficNav title = "대분류"
                        category = {c2}
                        sel = {selC2}
                        setSel = {setSelC2}  />
          }
    </div>
    <div className="flex justify-center m-3 font-bold border-b-orange-700">{sendMsg}</div>
    </div>
  )
}