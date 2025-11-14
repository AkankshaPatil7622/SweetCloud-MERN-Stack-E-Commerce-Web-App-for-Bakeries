import React from 'react'
import bf from "../assets/images/bf.jpg"
import CakeCategorycard from './CakeCategorycard'
function CatagoryContainer() {
  return (
    <div className='container-fluid p-5'>
      <CakeCategorycard src={bf}/>
    </div>
  )
}

export default CatagoryContainer
