import React from 'react'
import { BiSolidError } from 'react-icons/bi'

function NotFound() {
  return (
    <div className=' min-h-[80vh] bg-green-100'>
        
        
     <div className=' flex justify-center  items-center w-full '>

<div className=' text-center flex flex-col justify-center items-center'>

<BiSolidError color='green' size={200}  className=' mt-5'/>
    <h1 className='  text-4xl font-bold text-dark' >   NotFound</h1>
    <p>| page Not found please back to home</p>
</div>



     </div>
        
        
        
        </div>
  )
}

export default NotFound