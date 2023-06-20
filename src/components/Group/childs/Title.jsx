import React from 'react'

const Title = () => {
    console.log('This title is used for useCall backs')
  return (
    <div>This title is used for useCall backs</div>
  )
}

export default React.memo(Title) 