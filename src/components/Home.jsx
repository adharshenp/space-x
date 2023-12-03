import React from 'react'
import space from '../video/spacex_video.mp4'
import Header from './Header'
import './header.css'


function Home() {



  return (
    <>
      <Header />


      <div >
        <img width={'100%'} src='https://sxcontent9668.azureedge.us/cms-assets/assets/Homepage_Starlink_SLC_40_Desktop_5b1e6b5dd0.jpg' alt="" />

        <video id='vd' width={'100%'} autoPlay loop muted src={space}>

        </video>
        <img width={'100%'} style={{marginTop:'-20px'}} src='https://sxcontent9668.azureedge.us/cms-assets/assets/EOIR_Sat_South_Hill_Horiz_4952_Desktop_88f473d768.jpg
' alt="" />
      </div>










    </>
  )
}

export default Home