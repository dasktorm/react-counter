export const formatTime = (time) => {
    let min = Math.floor(time/60);
    let seg = Math.floor(time - (min * 60));
  
    if (min < 10) min= '0'+min;
    if (seg < 10) seg= '0'+seg;
  
    return `${min} : ${seg}`;
  }