import React from 'react'

export default function CateButton({content, handle_cate}) {
  return (
    <button onClick={handle_cate} className="font-bold p-2 rounded-md border border-solid border-5 border-black">{content}</button>
  )
}
