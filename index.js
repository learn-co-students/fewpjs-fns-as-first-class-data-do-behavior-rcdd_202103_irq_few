



/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  let first_time =time.split(":");
  let second_time=first_time[0].concat(first_time[1]);
  let result=parseInt(second_time,10);

  if(result<1200){
    return"Good Morning";
  }
  else if((result>=1200)&&(result<=1700)){
    return"Good Afternoon";
  }
  else if (result>1700){
    return"Good Evening";
  }

}
/* Write your implementation of displayMessage() */
function displayMessage(){
let node = document.getElementById("greeting");
node.innerText=("TEST");

}
