import React from 'react'

const Button = ({text,icon,classnme}) => {
  return (
    <div className ={`${classnme} rounded-3xl w-30 p-1 flex justify-center  gap-2 h-8 `}>
      <p>{text}</p>
      {icon && <img src={icon} alt="apply" className=' ' />}
    </div>
  )
}

export default Button
