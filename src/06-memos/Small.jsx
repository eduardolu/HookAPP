import React from 'react'

export const Small = React.memo(({Count}) => {
    console.log('mi small');
  return (
    <small> { Count } </small>
  )
})
