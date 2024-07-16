import React from 'react'

function CustomInputBox({ onChange, value }) {
  return (
    <div>
        <input type="email"
        name="email"
        placeholder="example@gmail.com"
        className="border border-black h-9 w-60 rounded-md " 
        required
        onChange={onChange}
        value={value} 
        />
    </div>
  )
}

export default CustomInputBox