import React, { useState } from 'react'

const PreviewImage = ({file}) => {
    const[preview, setPreview] = useState({})
    if(file)
    {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>{
            setPreview(reader.result)
        }
    }
  return (
    <div>
      <img style={{width:"200px"}, {borderRadius:"15px"}} src={preview} />
    </div>
  )
}

export default PreviewImage
