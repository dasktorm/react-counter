import React, { useEffect, useRef, useState } from 'react'
import {formatTime} from "../formatTime"
import "./counterStyle.css"

export const Counter = ({seconds}) => {
  const [countdown, setCountdown] = useState(60);
  const [inputValue, setInputValue] = useState('');
  const time = useRef();

  useEffect(()=>{
    if (countdown <= 0){
      clearInterval(time.current);
      alert(`Your timer has finished`);
    }
  },[countdown])


  const stopClock =()=>{
    clearInterval(time.current);
  };
  const playClock =()=>{
    clearInterval(time.current);
    time.current = setInterval(()=>{setCountdown(prev => prev - 1)}, 1000);
  }
  const restart =()=>{
    clearInterval(time.current);
    setCountdown(0);
  }
  

  const updateInputValue=(value)=>{
    setInputValue(value);
  }
  const setTimerTime = (value)=>{
    if (value<=0) return;
    if (value>0) setCountdown(value);
  }

  return (
    <div className='container mt-3'>
      <div className='col-sm-6 m-auto'>
        <h1 className='title'>Counter</h1>

        <div className='div-Timer'>
          <i className="fa-regular fa-clock"></i>
          <h2>{formatTime(countdown)}</h2>
        </div>

        <div className='grid gap-2 my-3'>
          <button className='btn btn-secondary g-col-4' type='button' onClick={stopClock}>
            <i className="fa-solid fa-pause"></i>
          </button>
          <button className='btn btn-secondary g-col-4' type='button' onClick={playClock}>
            <i className="fa-solid fa-play"></i>
          </button>
          <button className='btn btn-secondary g-col-4' type='button' onClick={restart}>
            <i className="fa-solid fa-stop"></i>
          </button>
        </div>

        <div className="input-group mb-3">
          <input 
            type="number"
            id="inputAlert"
            className="form-control"
            onChange={(e)=> updateInputValue(e.target.value)}
            placeholder='Set timer time at...(seg.)' />
          <button className="btn btn-outline-secondary" type="button" onClick={()=> setTimerTime(inputValue)}>
            <i className="fa-regular fa-bell"></i>
          </button>
        </div>

      </div>
        
    </div>
  )
}