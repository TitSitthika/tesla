import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
function ModelY() {
    useEffect(() =>{
        Aos.init({duration: 2000,opacity: 50});
    },[]);
  return (
    <div className='h-screen w-screen'>
            <div className='bg-model-y bg-cover bg-center bg-no-repeat w-screen h-full snap-start snap-always'>
            <div className='w-screen flex flex-col items-center md:space-y-[27%] space-y-[52%]'>
                <div className='pt-[15vh] text-center'>
                    <h1>Model Y</h1>
                    <p>Order Online for Touchless Delivery</p>
                </div>
                <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
                    <button className='bg-gay'>
                        Custom Order
                    </button>
                    <button className='bg-fuck text-black'>
                        Existing Inventory
                    </button> 
                </div>
                </div>
            </div>
        </div>
  )
}

export default ModelY