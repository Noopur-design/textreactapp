import React from 'react'

const Mainheader = props => {
  return (
    <header className="bg-blue-800 text-white p-3 shadow-md w-[100%]">
      {props.children}
    </header>
  )
}

export default Mainheader