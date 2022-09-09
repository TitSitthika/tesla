import React from 'react'
import {ChevronDoubleDownIcon} from '@heroicons/react/24/outline'

function ModelS() {
  return (
    <div>
        <div className='h-screen w-screen'>
            <div className='bg-model-s bg-cover bg-center bg-no-repeat w-screen h-full snap-start snap-always'>
            <div className='w-screen flex flex-col items-center md:space-y-[27%] space-y-[48%]'>
                <div className='pt-[15vh] text-center'>
                    <h1>Model S</h1>
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
                <div className='flex justify-center'>
                    <ChevronDoubleDownIcon className='text-white h-6 w-6 text-center mt-5 md:mt-10 animate-[jump_1.5s_infinite] cursor-pointer overflow-x-hidden'></ChevronDoubleDownIcon>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModelS