import React from 'react'

const Button = ({text,icon,classnme}) => {
  return (
    <div className ={`${classnme} rounded-3xl  flex justify-center  gap-2 items-center `}>
      <p  className=' px-3'>{text}</p>
      {icon && <img src={icon} alt="apply" className=' h-8' />}
    </div>
  )
}

export default Button
