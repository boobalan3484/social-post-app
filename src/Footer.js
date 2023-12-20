import React from 'react'

const Footer = () => {
  const today = new Date();
  return (
    <footer className='Footer'>
      <p> Designed & Built by Boobalan {today.getFullYear()} </p>
    </footer>
  )
}

export default Footer