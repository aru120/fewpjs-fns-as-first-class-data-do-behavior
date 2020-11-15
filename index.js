/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time){
  let newtime = parseInt(time)
  if (newtime < 12)
      return ("Good Morning")
      else if (newtime >= 12 && newtime <= 17)
      return ("Good Afternoon")
      else
      return ("Good Evening")

}

function displayMessage(str){
  let node = document.getElementById("greeting");
  node.innerText = str
}