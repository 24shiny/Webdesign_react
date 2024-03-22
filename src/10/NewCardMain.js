import React from 'react'
import NewCard from './NewCard'
import fooddata from './fooddata.json'
// import CateButton from './CateButton'
import { useState } from 'react'
import Buttons from '../UI/Buttons'

export default function NewCardMain() {
    // obj1 = {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    //   };
    const fObj = fooddata.map(item =>
      <NewCard cardData={item} key={item.사업장명}/>)


    let cate = fooddata.map(item=>item['운영주체 분류']);
    cate = new Set(cate);
    cate = [...cate];
    console.log(cate);
    
    const [ct, setCt] = useState(0);

    const handle_list = (filtedItem) => {
      const filtedObj = fooddata.filter(item => item['운영주체 분류']===filtedItem)
      .map(item =>
        <NewCard cardData={item} key={item['운영주체 분류']}/>);
        setCt(filtedObj);
    }

    const createCateButton = cate.map(item=>
      <Buttons caption={item} handleClick={()=>handle_list(item)}/>)

  return (
    <div>
      <div className='flex'>{createCateButton}</div>
      <div className='grid grid-cols-2'>{ct}</div>
    </div>
  )
}
