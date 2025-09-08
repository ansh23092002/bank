import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between items-center text-blue-800 p-9 bg-transparent  '>
      <h1 className='text-blue-900  font-[MaShanZheng] text-5xl'>Bank</h1>
      <ul className='flex gap-10 '>
        <li>About Us</li>
        <li>Personal Loan</li>
        <li>Security</li>
      </ul>
      <button className='border-white p-3 border rounded-2xl' >Sign Up</button>
    </div>
  )
}

export default Nav
