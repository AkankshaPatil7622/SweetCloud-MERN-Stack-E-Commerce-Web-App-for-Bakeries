import React from 'react'
import '../style/Home.css'
function CakeCategorycard({src}) {
  return (
    <div id='cakeCont'>
      <img src={src} alt="" style={{height:300,width:300, borderRadius:'50%'}} />
    </div>
  )
}

export default CakeCategorycard
