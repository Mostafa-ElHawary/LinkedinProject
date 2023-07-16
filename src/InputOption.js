import React from 'react'

function InputOption({Icon , title  , color}) {
  return (
    <div className='InputOption'>
      <Icon className='' styled={{color:color}}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption
