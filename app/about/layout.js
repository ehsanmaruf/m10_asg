import React from 'react'

const aboutLayout = ({ children }) => {
  return (
    <div>
        <p>This layout only works in about page!</p>
        { children }
    </div>
  )
}

export default aboutLayout