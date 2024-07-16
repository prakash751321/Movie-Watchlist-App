import React from 'react'

function CustomButton( { text, onClick } ) {
  return (
    <div>
        <input className='border border-black font-semibold h-9 w-[90%] rounded-md cursor-pointer bg-green-400 hover:bg-green-500 text-white' 
        type="submit" 
        value= { text }
        onClick={onClick}
        />
    </div>
  )
}

export default CustomButton