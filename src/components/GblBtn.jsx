import React from 'react'

const GblBtn = ({className, children}) => {
  return (
    <button className={`${className} rounded-lg  `}>{children}</button>
  )
}

export default GblBtn