// greeting section
function celsiusToFahrenheit(temperature) {
  let fahrenheit = temperature * 1.8 + 32;
  return fahrenheit;
}

const greeting = "Good Evening";
const weatherCondition = "Glomy";
const userLocation = "Cumilla";
let temperature = "20";
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toString()}°C outside`;
let fahrenheitText = `The weather is ${weatherCondition} and it's ${celsiusToFahrenheit(temperature).toString()}°F outside`;


document.getElementById("greeting").innerHTML = greeting;

document.getElementById("weather").innerHTML = celsiusText;

document
  .querySelector(".weather-group")
  .addEventListener("click", function (e) {
    if (e.target.id == "celsius") {
      document.getElementById("weather").innerHTML = celsiusText;
    } 
    else if (e.target.id == "fahr") {
      document.getElementById("weather").innerHTML = fahrenheitText;   
     }
  });

  // Time 

 let localTime = new Date();






setInterval(function(){
let hours = new Date().getHours().toString().padStart(2,'0');
let minutes = new Date().getMinutes().toString().padStart(2,'0');
let seconds = new Date().getSeconds().toString().padStart(2,'0');
  document.querySelector("span[data-time=hours]").textContent = hours;
  document.querySelector("span[data-time=minutes]").textContent = minutes;
  document.querySelector("span[data-time=seconds]").textContent = seconds;
},1000);
