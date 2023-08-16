import React, { useEffect, useRef, useState } from 'react'
import {formatTime} from "../formatTime"
import "./cronoStyle.css"

export const Crono = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [alertValue, setAlertValue] = useState('');
  const timer = useRef();

  useEffect(()=>{
    timer.current = setInterval(()=>{setCount(prev => prev + 1)}, 1000);
  },[]);

  useEffect(()=>{
    let alertNumber = parseFloat(alertValue);

    if (count !== alertNumber) return;
    if (count === alertNumber){
      return alert(`Timer has reached ${alertNumber} seconds`);
    }
  },[count, alertValue])

  const stopClock =()=>{
    clearInterval(timer.current);
  };
  
  const playClock =()=>{
    clearInterval(timer.current);
    timer.current = setInterval(()=>{setCount(prev => prev + 1)}, 1000);
  }

  const restart =()=>{
    clearInterval(timer.current);
    setCount(0);
  }
  
  const updateInputValue=(value)=>{
    setInputValue(value);
  }
  const sendAlertAt = (value)=>{
    setAlertValue(value);
  }

  return (
    <div className='container mt-3'>

        <div className='col-sm-6 m-auto'>
          <h1 className='title'>Cronometer</h1>

          <div className='div-Timer'>
            <i className="fa-regular fa-clock"></i>
            <h2>{formatTime(count)}</h2>
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
              placeholder='Notify me at...(seg.)' />
            <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={()=> sendAlertAt(inputValue)}>
              <i className="fa-regular fa-bell"></i>
            </button>
          </div>

          <div className={`alert alert-dark text-center ${alertValue.length>0 ? 'show' : ''}`}>
            Your alert is at <b>{alertValue}</b> seg.
          </div>
        </div>

    </div>
  )
}