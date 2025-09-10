import React from 'react'

const Button = ({text,icon,classnme}) => {
  return (
    <div className ={`${classnme} rounded-3xl  flex justify-center  gap-2 h-8 `}>
      <p  className='p-1 px-3'>{text}</p>
      {icon && <img src={icon} alt="apply" className=' ' />}
    </div>
  )
}

export default Button
