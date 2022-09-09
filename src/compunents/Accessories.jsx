import React from 'react'

function Accessories() {
  return (
    <div>
        <div className='h-screen w-screen'>
            <div className='bg-accessories bg-cover bg-center bg-no-repeat w-screen h-full snap-start snap-always'>
            <div className='w-screen flex flex-col items-center md:space-y-[27%] space-y-[52%]'>
                <div className='pt-[15vh] text-center'>
                    <h1>Accessories</h1>
                </div>
                <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
                    <button className='bg-gay'>
                        Shop Now
                    </button> 
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accessories