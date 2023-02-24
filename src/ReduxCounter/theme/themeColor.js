import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { colorChange } from './themeSlice';

export default function ThemeColor() {
    const [color,setColor]=useState("white");
    const dispatch=useDispatch()

  return (
    <div>
      <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
      <button onClick={()=>{dispatch(colorChange(color))}}> Change text Color </button>
    </div>
  )
}
