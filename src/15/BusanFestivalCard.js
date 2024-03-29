export default function GalleryCard({exampleLink}) {
    // const exampleLink = GalleryData[0];
    console.log(exampleLink);
    return (
    <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={exampleLink.MAIN_IMG_NORMAL} alt={exampleLink.UC_SEQ} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{exampleLink.PLACE}</div>
            <div className="text-gray-700 text-base">{exampleLink.수영구}</div>
            <div>{exampleLink.TITLE}</div>
            <div>{exampleLink.MAIN_PLACE}</div>
            <div>{exampleLink.TRFC_INFO}</div>
        </div>
        </div>
    </>
  )
}
