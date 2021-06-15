let day = document.querySelector('.day');                                                  //get day container
let hours = document.querySelector('.hours');                                              //get hour container
let minutes = document.querySelector('.minutes');                                          //get minute container
let sec = document.querySelector('.sec');                                                  //get second container
let poruka = document.querySelector('.poruka');                                            //get container for message
let cn = document.querySelector('.cn')                                                     //get container for countdown

let datum = new Date('December 31 2021 23:59:59');                                         //date to countdown to(new year date)
let datumTimestamp = datum.getTime();                                                      //time stamp of new year date

function countdown (){
  let danas = new Date();                                                                  //today's date
  let danasTimestamp = danas.getTime();                                                    //time stamp of today
  let ostatak = datumTimestamp - danasTimestamp;                                           //time stamp of time between today and new year 

  let d = Math.floor(ostatak / (1000 * 60 * 60 * 24));                                     //convert ostatak to days
  let h = Math.floor((ostatak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));                //convert rest of ostatak to hours
  let m = Math.floor((ostatak % (1000 * 60 * 60)) / (1000 * 60));                          //convert rest of ostatak to minutes
  let s = Math.floor((ostatak % (1000 * 60)) / 1000);                                      //convert rest of ostatak to seconds

  if(d < 10){d = `0${d}`};                                                                  //styling days, hours, minutes and seconds
  if(h < 10){h = `0${h}`};
  if(m < 10){m = `0${m}`};
  if(s < 10){s = `0${s}`};

  day.innerText = d;                                                                       //add days, hours, mminutes and seconds to it's cointainer
  hours.innerText = h;
  minutes.innerText = m;
  sec.innerText = s;

  if (ostatak < 0) {                                                                       //show message when countdown reach the end
      clearInterval(countdown);
      cn.style.display = 'none';
      poruka.innerHTML = "HAPPY NEW YEAR";
    }
    
}

setInterval(countdown, 1000);                                                            //repeat countdown function every 1s

