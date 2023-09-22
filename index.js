let hour = document.getElementById("hour")
    let minut = document.getElementById("minut")
    let second = document.getElementById("second")
    let start = document.getElementById("start")
    let stop = document.getElementById("stop")
    let reset = document.getElementById("reset")
    start.addEventListener("click",function(){
      start = setInterval(()=>{
        if(second.textContent==59){
          minut.textContent = Number(minut.textContent)+1
          second.textContent = 0
        }else if(minut.textContent==59){
            hour.textContent = Number(hour.textContent)+1
            minut.textContent = 0
            second.textContent =0
        }
        else{
          second.textContent = Number(second.textContent)+1
        }
        },1000)
    })
    stop.addEventListener("click",function(){
        clearInterval(start)
    })
    reset.addEventListener("click",function(){
      clearInterval(start)
      hour.textContent = 0;
      minut.textContent = 0;
      second.textContent =0;
    })