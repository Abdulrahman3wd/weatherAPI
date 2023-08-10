//next step Get Data from API


const cityElement = document.querySelector("#city")
const date = document.querySelector("#date")
const dayOfToday = document.querySelector("#day-of-today")
const wind = document.querySelector("#wind")
const windDirction = document.querySelector("#wind-direction")
const degreeOfToady = document.querySelector("#degreeOfDay")
const imageToday =document.querySelector(".weather-icon")
const weatherText = document.querySelector("#weatherText")
const dateNow = document.querySelector("#dateNow")
const nextDay = document.querySelector("#nextDay")
const nextNextDay = document.querySelector("#nextNextDay")
const degreeOfNextDay =document.querySelector("#degreeOfNextDay")
const textOfNextDay = document.querySelector("#textOfNextDay")
const nextDayicon =document.querySelector(".next-day-icon")
const day2icon = document.querySelector("#day2icon")
const degreeOfNextnextDay = document.querySelector("#degreeOfNextnextDay")
const textOfNextnextDay = document.querySelector("#textOfNextnextDay")
const day3Icon = document.querySelector(".day3Icon")

const searchCountry = document.querySelector("search")

// let loc = navigator.geolocation.getCurrentPosition(att)
//  function att(position) {
//     let lat = position.coords.latitude;
//     let long = position.coords.longitude;
//     console.log(lat);
//     console.log(long)

// }
// att()




function WeatherData(term) {
    
    let getTodayWeatherData = new XMLHttpRequest() ;
getTodayWeatherData.open("get" , `https://api.weatherapi.com/v1/forecast.json?key=b6f16856c4344cd8bf5105816230808&q=${term}&days=3` ); 
getTodayWeatherData.send(); 
getTodayWeatherData.addEventListener("readystatechange" ,  function() {
    if(getTodayWeatherData.readyState == 4 && getTodayWeatherData.status==200 ){
        console.log(JSON.parse( getTodayWeatherData.response))
        cityElement.innerHTML= JSON.parse( getTodayWeatherData.response).location.name
        wind.innerHTML =`${JSON.parse(getTodayWeatherData.response).current.wind_kph}km/h`  
        windDirction.innerHTML = JSON.parse(getTodayWeatherData.response).current.wind_dir
        degreeOfToady.innerHTML = JSON.parse(getTodayWeatherData.response).current.temp_c
        weatherText.innerHTML = JSON.parse(getTodayWeatherData.response).forecast.forecastday[0].day.condition.text
        degreeOfNextDay.innerHTML =JSON.parse(getTodayWeatherData.response).forecast.forecastday[1].day.avgtemp_c
        textOfNextDay.innerHTML =JSON.parse(getTodayWeatherData.response).forecast.forecastday[1].day.condition.text
        degreeOfNextnextDay.innerHTML = JSON.parse(getTodayWeatherData.response).forecast.forecastday[2].day.avgtemp_c
        textOfNextnextDay.innerHTML =JSON.parse(getTodayWeatherData.response).forecast.forecastday[2].day.condition.text
        day2icon.setAttribute("src" ,`http:// ${JSON.parse(getTodayWeatherData.response).forecast.forecastday[1].day.condition.icon}` )
        // console.log(JSON.parse(getTodayWeatherData.response).forecast.forecastday[1].day.condition.text)


        if (JSON.parse(getTodayWeatherData.response).current.temp_c <= 25) {
            imageToday.innerHTML = ' <img id="img-today" src="images/heavy-rain.png" alt=""> '
        }
        
        else {
            imageToday.innerHTML = ' <img id="img-today" src="images/sunny.png" alt=""> '
        }
        
        if (JSON.parse(getTodayWeatherData.response).forecast.forecastday[1].day.avgtemp_c <=25) {
            nextDayicon.innerHTML =' <img id="img-today" src="images/heavy-rain.png" alt=""> '
            
        }
        else{
            nextDayicon.innerHTML =' <img id="img-today" src="images/sunny.png" alt=""> '
        }
        if (JSON.parse(getTodayWeatherData.response).forecast.forecastday[2].day.avgtemp_c <=25) {
            day3Icon.innerHTML =' <img id="img-today" src="images/heavy-rain.png" alt=""> '
            
        }
        else{
            day3Icon.innerHTML =' <img id="img-today" src="images/sunny.png" alt=""> '
        }

        // console.log(JSON.parse(getTodayWeatherData.response).forecast.forecastday[0].day.condition.text)
    }
})
    
}


function GetcurrentDay() {
    let dateNow = new Date()
    // console.log(dateNow.getDay())
    let currentDay = dateNow.getDay()
    switch (true) {
        case currentDay == 0:
            dayOfToday.innerHTML = "Sunday"
            break;
            case currentDay == 1 : 
            dayOfToday.innerHTML = "Monday"
            break; 
            case currentDay == 2 : 
            dayOfToday.innerHTML = "Tuesday"
            break;
            case currentDay == 3: 
            dayOfToday.innerHTML = "Wednesday"
            break;
            case currentDay == 4 : 
            dayOfToday.innerHTML = "Thursday"
            break; 
            case currentDay == 5 : 
            dayOfToday.innerHTML = "Friday"
            break;
            case currentDay == 6 : 
            dayOfToday.innerHTML = "Saturday"
}
}

GetcurrentDay()

function getcurrentMonth() {
    let monthNow = new Date();
    let currentMonth = monthNow.getMonth();
    let dayOfCurrentMonth = new Date();
    let currentDayofMonth = dayOfCurrentMonth.getDate();
    let dateNow = document.getElementById("dateNow");

    switch (currentMonth) {
        case 0:
            dateNow.innerHTML = `${currentDayofMonth} January `;
            break;
        case 1:
            dateNow.innerHTML = `${currentDayofMonth} February `;
            break;
        case 2:
            dateNow.innerHTML = `${currentDayofMonth} March `;
            break;
        case 3:
            dateNow.innerHTML = `${currentDayofMonth} April `;
            break;
        case 4:
            dateNow.innerHTML = `${currentDayofMonth} May `;
            break;
        case 5:
            dateNow.innerHTML = `${currentDayofMonth} June `;
            break;
        case 6:
            dateNow.innerHTML = `${currentDayofMonth} July `;
            break;
        case 7:
            dateNow.innerHTML = `${currentDayofMonth} August `;
            break;
        case 8:
            dateNow.innerHTML = `${currentDayofMonth} September `;
            break;
        case 9:
            dateNow.innerHTML = `${currentDayofMonth} October `;
            break;
        case 10:
            dateNow.innerHTML = `${currentDayofMonth} November `;
            break;
        case 11:
            dateNow.innerHTML = `${currentDayofMonth} December `;
            break;
    }
}

getcurrentMonth();

(function() {
let NextWeatherDay = new Date()
 let DayInc = NextWeatherDay.getDay() +1 
 switch (true) {
    case DayInc == 0:
        nextDay.innerHTML = "Sunday"
        
        break;
        case DayInc == 1 : 
        nextDay.innerHTML = "Monday"
        break; 
        case DayInc == 2 : 
        nextDay.innerHTML = "Tuesday"
        break;
        case DayInc == 3: 
        nextDay.innerHTML = "Wednesday"
        
        break;
        case DayInc == 4 : 
        nextDay.innerHTML = "Thursday"
        break; 
        case DayInc == 5 : 
        nextDay.innerHTML = "Friday"
        break;
        case DayInc == 6 : 
        nextDay.innerHTML = "Saturday"
}

})();

(function() {
    let nextNextWeatherDay = new Date()
     let DayInc2 = nextNextWeatherDay.getDay() + 2 
    //  console.log(DayInc2)
     switch (true) {
        case DayInc2 == 0:
            nextNextDay.innerHTML = "Sunday"
            
            break;
            case DayInc2 == 1 : 
            nextNextDay.innerHTML = "Monday"
            break; 
            case DayInc2 == 2 : 
            nextNextDay.innerHTML = "Tuesday"
            break;
            case DayInc2 == 3: 
            nextNextDay.innerHTML = "Wednesday"
            
            break;
            case DayInc2 == 4 : 
            nextNextDay.innerHTML = "Thursday"
            break; 
            case DayInc2 == 5 : 
            nextNextDay.innerHTML = "Friday"
            break;
            case DayInc2 == 6 : 
            nextNextDay.innerHTML = "Saturday"
    }
    
    })();
