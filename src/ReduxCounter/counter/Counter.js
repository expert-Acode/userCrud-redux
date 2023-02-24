import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment } from './CounterSlice'

export default function Counter() {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.count)
      const textColor=useSelector((state)=>state.color.color)
  return (
    <div>
        <h1>
         
      <button onClick={()=> {dispatch(increment())}}>
        increment
      </button>
      <span style={{color:textColor}}>Counter : {count}</span>
      <button   onClick={() => {dispatch(decrement())}}>
        decrement
      </button>
      </h1>
    </div>
  )
}
