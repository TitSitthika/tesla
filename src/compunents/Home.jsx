import React from 'react'
import ModelM from './ModelM'
import ModelY from './ModelY'
import Model3 from './Model3'
import ModelS from './ModelS'
import SolarRoof from './SolarRoof'
import SolarPanel from './SolarPanel'
import Accessories from './Accessories'

function Home() {
  
  return (
    <div className='h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
        <ModelS></ModelS>
        <ModelM></ModelM>
        <ModelY></ModelY>
        <Model3></Model3>
        <SolarRoof></SolarRoof>
        <SolarPanel ></SolarPanel>
        <Accessories ></Accessories>
    </div>
  )
}

export default Home