/* Given Code, don't edit */

function greet(timeStr){
  let nowTime = timeStr.split(':');
  let nowHour = parseInt(nowTime[0]);
  if (nowHour<12){
    return "Good Morning";
  } else if (nowHour>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}
