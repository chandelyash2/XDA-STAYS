import React from 'react'
interface IButton {
  label: string
}
const Button: React.FC<IButton> = ({ label }) => {
  return (
    <button className='bg-[#00caff] px-5 font-bold'>{label}</button>


  )
}

export default Button