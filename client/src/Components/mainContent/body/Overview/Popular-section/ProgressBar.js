import React from 'react'

const ProgressBar = (props) => {
  console.log(props.percentage)
  return(
    <div className="progress-bar" >
        <Filler percentage={props.percentage}/>
    </div>
  )
}

const Filler  = (props) => {
  return <div className="filler" style={{ width:`${props.percentage}%`}}/>
}

export default ProgressBar
