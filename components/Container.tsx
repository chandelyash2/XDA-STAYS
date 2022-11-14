import React from 'react'
interface IContainer {
  children: React.ReactNode
}
const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className="xl:container xl:mx-auto px-4 md:px-10">
      {children}
    </div>
  )
}

export default Container