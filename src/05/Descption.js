import { FaRegKissWinkHeart } from "react-icons/fa";
import D1 from "./D1";
import data from './MyListData.json'

export default function Descption() {
    const name1 = 'HTML';
    const name2 = 'CSS'
    const name3 = 'JavaScript'
    const name4 = 'React'
    const img1 = './images/html.png'
    const img2 = './images/css.png'
    const img3 = './images/js.png'
    const img4 = './images/react.png'
    const des1 = 'HTML(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를 정의할 때 사용';
    const des2 = 'Cascading Style Sheets(CSS)는 HTML이나 XML(XML의 방언인 SVG, XHTML 포함)로 작성된 문서의 표시 방법을 기술하기 위한 스타일 시트 언어';
    const des3 = '웹 페이지를 위한 스크립트 언어로 가벼운, 인터프리터 혹은 just-in-time 컴파일 프로그래밍 언어로, 일급 함수를 지원';
    const des4 ='사용자 인터페이스를 만들기 위한 JavaScript 라이브러리'
    
    const dataItems = data.map(item =>
        <D1 name={item.title} img={item.imgUrl} des={item.content} key={item.title}/>
        );
    
    return (
    // <div className="flex flex-col grid grid-cols-1 md:grid-cols-2">
    //     <D1 name={name1} img={img1} des={des1}/>
    //     <D1 name={name2} img={img2} des={des2}/>
    //     <D1 name={name3} img={img3} des={des3}/>
    //     <D1 name={name4} img={img4} des={des4}/>
    // </div>
    <div className="flex flex-col">
        <D1 name={name1} img={img1} des={des1}/>
        <D1 name={name2} img={img2} des={des2}/>
        <D1 name={name3} img={img3} des={des3}/>
        <D1 name={name4} img={img4} des={des4}/>
        {/* use the map function */}
        The map function can facilitate this process!
        {dataItems}
    </div>
  )
}
