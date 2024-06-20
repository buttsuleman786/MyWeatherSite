const input = document.getElementById("input");
const button = document.querySelector(".button");
let cityName;
let temp = document.querySelector(".info1")
let desc= document.querySelector(".info2")
let potty = document.querySelector(".info3")
let wind = document.querySelector(".info4")
let visibility = document.querySelector(".info5")


button.addEventListener("click", function(){
    cityName = input.value;
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c09f8745d929242307ca7accd5ee2f53`;

fetch(API)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    let weather=data.main.temp
    temp.innerHTML = weather + '°F';

    let decr = data.weather[0].description
    desc.innerHTML = decr + "";

    let country= data.sys.country
    potty.innerHTML = country + "";

    let bind = data.wind.speed
    wind.innerHTML = bind + ""+'mph';

    let clear = data.visibility
    visibility.innerHTML = clear + "" + 'm';
    

})
    .catch(err => console.log(err))

})
    console.log("working");


    

