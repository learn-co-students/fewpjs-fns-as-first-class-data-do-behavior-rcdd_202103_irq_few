/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let Time = timeString.split(':');
  let timeInt = parseInt(Time[0]);
  if (timeInt < 12){
    return 'Good Morning';}

  else if (timeInt >= 12 && timeInt <= 17){
    return 'Good Afternoon';}

  else if (timeInt > 17){return 'Good Evening';}
}
/* Write your implementation of displayMessage() */
function displayMessage(greet){
  const greeting = document.getElementById('greeting');
  greeting.innerText = greet;
}
