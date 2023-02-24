import React from 'react'
import { useSelector } from 'react-redux'

export default function Coin() {
  
    const coin=useSelector((state)=>state.counter.count)
    const count=coin*2
    const textColor=useSelector((state)=>state.color.color)
    console.log(textColor,"rrrrrrrrrrrrrrrrr")
  return (
    <div>
        <h1>
      <span style={{color:textColor}}>Coin : {count}</span>
      </h1>
    </div>
  )
}
