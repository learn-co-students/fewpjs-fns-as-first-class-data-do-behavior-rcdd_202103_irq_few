/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet( str){
  if (parseInt (str) <12) {
    return "Good Morning"

  } else if(parseInt (str)>12 && parseInt (str)<17){
    return "Good Afternoon"

  }
  else if(parseInt (str)>17){
    return "Good Evening"
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(str){
  const h1 = document.getElementById('greeting');
  h1.innerText= str;
}
