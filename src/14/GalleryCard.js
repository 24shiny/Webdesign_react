import GalleryData from './GalleryData';

export default function GalleryCard({exampleLink}) {
    // const exampleLink = GalleryData[0];
    console.log(exampleLink);
    const tagNames = exampleLink.galSearchKeyword.split(',');
    const tags = tagNames.map((item)=>
    <span key={item} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {item.trim()}</span>
    );
  return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={exampleLink.galWebImageUrl.replace('http://','https://')} alt={exampleLink.galContentId} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{exampleLink.galTitle}</div>
            <p className="text-gray-700 text-base">
            {exampleLink.galPhotographyLocation}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            {tags}
        </div>
        </div>
    </>
  )
}
