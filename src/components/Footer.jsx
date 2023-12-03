import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div id='footer' style={{backgroundColor:'black'}} className=' d-flex justify-content-center '>
      <h6 style={{fontSize:'11.9px'}} className='text-light fw-normal mt-5 mb-4 me-3 ' >SPACEX ©️ 2023</h6>
      <h6 id='foot' style={{fontSize:'11.9px ',cursor:'pointer'}} className='text-light fw-bold mt-5 mb-4 ms-3' >PRIVACY POLICY</h6>
      <h6 id='foot' style={{fontSize:'11.9px ',cursor:'pointer'}} className='text-light fw-bold mt-5 mb-4 ms-4' >SUPPLIERS</h6>
    </div>
  )
}

export default Footer