/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let t=time.split(":");
  
  if(t[0]<12){
    return "Good Morning";
  }
  else if(t[0]>=12 && t[0]<=17){
     return "Good Afternoon";
  }
  else if(t[0]>17 && t[0]<24){
       return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(message){
  document.getElementById("greeting").innerText=message;
}
