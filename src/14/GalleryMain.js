import GalleryCard from "./GalleryCard"
// import GalleryData from './GalleryData';
import InputBox from "../UI/InputBox";
import Buttons from '../UI/Buttons'
import { useEffect, useRef,useState } from "react";

export default function GalleryMain() {
    // const exampleLink = GalleryData[0];
    const [exampleLink, setExampleLink] = useState([]); 
    const [tags, setTags] = useState([]);

    const keyword = useRef();

    const handle_keyword = () => {
        
    }

    useEffect(()=>{
        console.log(exampleLink);
        if(!exampleLink) return;
        let tm = exampleLink.map((item)=>
            <GalleryCard key={item} exampleLink={item} />
        )
        setTags(tm);
    },[exampleLink])

    const getData = (encodedKeyword) => { //getData
        // console.log(keyword.current.value);
        // console.log(encodedKeyword);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url + `serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
        url = url + `keyword=${encodedKeyword}&_type=json`
        console.log(url);
        fetch(url).then(resp=>resp.json()).then(data=>setExampleLink(data.response.body.items.item));
        // console.log(exampleLink);
    }

    const handleFetch = () => {
        if(keyword.current.value===''){
            alert('enter a keyword');
            keyword.current.focus();
            return;
        }
        let encodedKeyword = encodeURI(keyword.current.value);
        getData(encodedKeyword);
    }
    
    const handleClear = () =>{
        keyword.current.value='';
        keyword.current.focus();
        setTags('');
    }

  return (
    <div className="flex flex-col">
    <div className="flex justify-center">
        <div className='flex justify-end items-center'>
        <span>ENTER A SEARCH KEYWORD :</span>
        <InputBox type="text" ph="ENTER A KEYWORD" inputRef={keyword} isRequired={true} handle_change ={handle_keyword}/>
        </div>
        <div>
            <Buttons caption="SEARCH" handleClick={handleFetch}/>
            <Buttons caption="CLEAR" handleClick={handleClear}/>
        </div>
    </div>
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3"> 
        {tags}
        </div>
    </div>
    </div>
  )
}
