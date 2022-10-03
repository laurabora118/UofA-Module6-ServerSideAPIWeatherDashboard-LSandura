var citylat = "42.3314"
var citylong = "83.0458"
var api = "bca1f98c84ed35d338edb95341f576da"
// console.log("lat")
// console.log("long")
// console.log("api")

testWeather()
function testWeather () {
  console.log("start fetch")
  // navigator.geolocation.getCurrentPosition((success)) => {
    // let {latitud, longitude } = success.coords;
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${citylat}&lon=${citylong}&units=imperial&exclude=minutely,alerts&appid=${api}`)
    .then(res => res.json())
    .then(function (data) {   
      console.log("data",data)
      //temp
      var tempresponse = data.current.temp
      console.log("temp console log",tempresponse)
      var tlocal = tempresponse;
      localStorage.setItem("temp", JSON.stringify(tlocal));
      console.log("send temp to local storage")
      let gettemplocal = localStorage.getItem("temp")
      console.log("get current temp from local storage")
      mytempreturned.textContent = gettemplocal;
      console.log("send current temp to placeholder")
    //windspeed
      var windspeedresponse = data.current.wind_speed
      console.log("wind speed console log",windspeedresponse)
      var wslocal =windspeedresponse;
      localStorage.setItem("wind speed", JSON.stringify(wslocal));
      console.log("send windspeed to local storage")
      let getwindlocal = localStorage.getItem("wind speed")
      console.log("get current wind from local storage")
      mywindreturned.textContent = getwindlocal;
      console.log("send current wind to placeholder")
    // humidity       
      var humidityresponse = data.current.humidity
      console.log("humidity console log",humidityresponse)
      var hlocal = humidityresponse;
      localStorage.setItem("humidity", JSON.stringify(hlocal));
      console.log("send humidity to local storage")
      let gethumiditylocal = localStorage.getItem("humidity")
      console.log("get current humidity from local storage")
      myhumidityreturned.textContent = gethumiditylocal;
      console.log("send current humidity to placeholder")
    //  uv index
      var uvindexresponse = data.current.uvi
      console.log("uv index console log", uvindexresponse)
      var uvlocal =uvindexresponse;
      localStorage.setItem("uv index", JSON.stringify(uvlocal));
      console.log("send uv index to local storage")
      let getuvindexlocal = localStorage.getItem("uv index")
      console.log("get current uvindex from local storage")
      myuvindexreturned.textContent = getuvindexlocal;
      console.log("send current uvindex to placeholder")
     // localStorage.clear();
    //   Forecasts
    //day1 need to figure out day icon
      //to get icon use data.daily[0].weather[0].icon
      //will use icon description I can get icon list download set up to get from local storage 
      var d1iconresponse = data.daily[0].weather[0].description
      console.log("day 1 icon console log",d1iconresponse)
      var d1iconlocal = d1iconresponse;
      localStorage.setItem("day1icon", JSON.stringify(d1iconlocal));
      console.log("send day 1 icon to local storage")    
      let d1geticonlocal = localStorage.getItem("day1icon")
      console.log("get day 1 icon from local storage")
      myday1iconreturned.textContent = d1geticonlocal;
      console.log("send day 1 icon to placeholder")
    //day1 //need to figure out day 1 forecast
      var d1tempresponse = data.daily[0].temp.day
      console.log("day 1 temp console log",d1tempresponse)
      var d1templocal = d1tempresponse;
      localStorage.setItem("day1temp", JSON.stringify(d1templocal));
      console.log("send day 1 temp to local storage")
      let d1gettemplocal = localStorage.getItem("day1temp")
      console.log("get day 1 temp from local storage")
      myday1tempreturned.textContent = d1gettemplocal;
      console.log("send day 1 temp to placeholder")
    // //day1 //wind
      var d1windresponse = data.daily[0].wind_speed
      console.log("day 1 temp console log",d1windresponse)
      var d1windlocal = d1windresponse;
      localStorage.setItem("day1wind", JSON.stringify(d1windlocal));
      console.log("send day 1 wind to local storage")
      let d1getwindlocal = localStorage.getItem("day1wind")
      console.log("get day 1 wind from local storage")
      myday1windreturned.textContent = d1getwindlocal;
      console.log("send day 1 wind to placeholder")
    //  //day1 //humidity
      var d1humidityresponse = data.daily[0].humidity
      console.log("day 1 temp console log",d1windresponse)
      var d1humiditylocal = d1humidityresponse;
      localStorage.setItem("day1humidity", JSON.stringify(d1humiditylocal));
      console.log("send day 1 humidity to local storage")
      let d1gethumiditylocal = localStorage.getItem("day1wind")
      console.log("get day 1 humidity from local storage")
      myday1humidityreturned.textContent = d1gethumiditylocal;
      console.log("send day 1 humidity to placeholder")
    //******2
    //day2 need to figure out day icon
    //to get icon use data.daily[0].weather[0].icon
    //icon description is always weather[0].description but daily number changes
    //will use icon description I can get icon list download set up to get from local storage 
      var d2iconresponse = data.daily[1].weather[0].description
      console.log("day 2 icon console log",d2iconresponse)
      var d2iconlocal = d2iconresponse;
      localStorage.setItem("day2icon", JSON.stringify(d2iconlocal));
      console.log("send day 2 icon to local storage")
      let d2geticonlocal = localStorage.getItem("day2icon")
      console.log("get day 2 icon from local storage")
      myday2iconreturned.textContent = d2geticonlocal;
      console.log("send day 2 icon to placeholder")
    //day2 //need to figure out day 2 forecast
      var d2tempresponse = data.daily[1].temp.day
      console.log("day 2 temp console log",d2tempresponse)
      var d2templocal = d2tempresponse;
      localStorage.setItem("day2temp", JSON.stringify(d2templocal));
      console.log("send day 2 temp to local storage")
      let d2gettemplocal = localStorage.getItem("day2temp")
      console.log("get day 2 temp from local storage")
      myday2tempreturned.textContent = d2gettemplocal;
      console.log("send day 2 temp to placeholder")
    //day2 //wind
      var d2windresponse = data.daily[1].wind_speed
      console.log("day 2 temp console log",d2windresponse)
      var d2windlocal = d2windresponse;
      localStorage.setItem("day2wind", JSON.stringify(d2windlocal));
      console.log("send day 2 wind to local storage")
      let d2getwindlocal = localStorage.getItem("day2wind")
      console.log("get day 2 wind from local storage")
      myday2windreturned.textContent = d2getwindlocal;
      console.log("send day 2 wind to placeholder")
     //day2 //humidity
      var d2humidityresponse = data.daily[1].humidity
      console.log("day 2 temp console log",d2windresponse)
      var d2humiditylocal = d2humidityresponse;
      localStorage.setItem("day2humidity", JSON.stringify(d2humiditylocal));
      console.log("send day 2 humidity to local storage")
      let d2gethumiditylocal = localStorage.getItem("day2humidity")
      console.log("get day 2 humidity from local storage")
      myday2humidityreturned.textContent = d2gethumiditylocal;
      console.log("send day 2 humidity to placeholder")
    //******3
    //day3 //need to figure out day icon
        //to get icon use data.daily[0].weather[0].icon
        //icon description is always weather[0].description but daily number changes
       //will use icon description I can get icon list download set up to get from local storage 
      var d3iconresponse = data.daily[2].weather[0].description
      console.log("day 3 icon console log",d3iconresponse)
      var d3iconlocal = d3iconresponse;
      localStorage.setItem("day3icon", JSON.stringify(d3iconlocal));
      console.log("send day 3 icon to local storage")
      let d3geticonlocal = localStorage.getItem("day3icon")
      console.log("get day 3 icon from local storage")
      myday3iconreturned.textContent = d3geticonlocal;
      console.log("send day 3 icon to placeholder")
    //day3 //need to figure out day 3 forecast
      var d3tempresponse = data.daily[2].temp.day
      console.log("day 3 temp console log",d3tempresponse)
      var d3templocal = d3tempresponse;
      localStorage.setItem("day3temp", JSON.stringify(d3templocal));
      console.log("send day 3 temp to local storage")
      let d3gettemplocal = localStorage.getItem("day3temp")
      console.log("get day 3 temp from local storage")
      myday3tempreturned.textContent = d3gettemplocal;
      console.log("send day 3 temp to placeholder")
    //day3 //wind
      var d3windresponse = data.daily[2].wind_speed
      console.log("day 3 temp console log",d3windresponse)
      var d3windlocal = d3windresponse;
      localStorage.setItem("day3wind", JSON.stringify(d3windlocal));
      console.log("send day 3 wind to local storage")
      let d3getwindlocal = localStorage.getItem("day3wind")
      console.log("get day 3 wind from local storage")
      myday3windreturned.textContent = d3getwindlocal;
      console.log("send day 3 wind to placeholder")
    //day3 //humidity
      var d3humidityresponse = data.daily[2].humidity
      console.log("day 3 temp console log",d3windresponse)
      var d3humiditylocal = d3humidityresponse;
      localStorage.setItem("day3humidity", JSON.stringify(d3humiditylocal));
      console.log("send day 3 humidity to local storage")
      let d3gethumiditylocal = localStorage.getItem("day3humidity")
      console.log("get day 3 humidity from local storage")
      myday3humidityreturned.textContent = d3gethumiditylocal;
      console.log("send day 3 humidity to placeholder")
    //******4
    //day4 //need to figure out day icon
      //to get icon use data.daily[0].weather[0].icon
      //icon description is always weather[0].description but daily number changes
      //will use icon description I can get icon list download set up to get from local storage 
      var d4iconresponse = data.daily[3].weather[0].description
      console.log("day 4 icon console log",d4iconresponse)
      var d4iconlocal = d4iconresponse;
      localStorage.setItem("day4icon", JSON.stringify(d4iconlocal));
      console.log("send day 4 icon to local storage")
      let d4geticonlocal = localStorage.getItem("day4icon")
      console.log("get day 4 icon from local storage")
      myday4iconreturned.textContent = d4geticonlocal;
      console.log("send day 4 icon to placeholder")
    //day4 //need to figure out day 4 forecast
      var d4tempresponse = data.daily[3].temp.day
      console.log("day 4 temp console log",d4tempresponse)
      var d4templocal = d4tempresponse;
      localStorage.setItem("day4temp", JSON.stringify(d4templocal));
      console.log("send day 4 temp to local storage")
      let d4gettemplocal = localStorage.getItem("day4temp")
      console.log("get day 4 temp from local storage")
      myday4tempreturned.textContent = d4gettemplocal;
      console.log("send day 4 temp to placeholder")
    //day4 //wind
      var d4windresponse = data.daily[3].wind_speed
      console.log("day 4 wind console log",d4windresponse)
      var d4windlocal = d4windresponse;
      localStorage.setItem("day4wind", JSON.stringify(d4windlocal));
      console.log("send day 4 wind to local storage")
      let d4getwindlocal = localStorage.getItem("day1wind")
      console.log("get day 4 wind from local storage")
      myday4windreturned.textContent = d4getwindlocal;
      console.log("send day 4 wind to placeholder")
     //day4 //humidity
      var d4humidityresponse = data.daily[3].humidity
      console.log("day 4 humidity console log",d4windresponse)
      var d4humiditylocal = d4humidityresponse;
      localStorage.setItem("day4humidity", JSON.stringify(d4humiditylocal));
      console.log("send day 4 humidity to local storage")
      let d4gethumiditylocal = localStorage.getItem("day4humidity")
      console.log("get day 4 humidity from local storage")
      myday4humidityreturned.textContent = d4gethumiditylocal;
      console.log("send day 4 humidity to placeholder")
    //******5
    //day5 //need to figure out day icon
    // // //ICON link
    // // icon link URL is http://openweathermap.org/img/wn/10d@2x.png
    // // //Icon list
    // // Day icon	Night icon	Description
    // // 01d.png 	01n.png 	clear sky
    // // 02d.png 	02n.png 	few clouds
    // // 03d.png 	03n.png 	scattered clouds
    // // 04d.png 	04n.png 	broken clouds
    // // 09d.png 	09n.png 	shower rain
    // // 10d.png 	10n.png 	rain
    // // 11d.png 	11n.png 	thunderstorm
    // // 13d.png 	13n.png 	snow
    // // 50d.png 	50n.png 	mist
      //to get icon use data.daily[0].weather[0].icon
      //icon description is always weather[0].description but daily number changes
      //will use icon description I can get icon list download set up to get from local storage 
      var d5iconresponse = data.daily[4].weather[0].description
      console.log("day 5 icon console log",d5iconresponse)
      var d5iconlocal = d5iconresponse;
      localStorage.setItem("day5icon", JSON.stringify(d5iconlocal));
      console.log("send day 5 icon to local storage")
      let d5geticonlocal = localStorage.getItem("day5icon")
      console.log("get day 5 icon from local storage")
      myday5iconreturned.textContent = d5geticonlocal;
      console.log("send day 5 icon to placeholder")
    //day5 //need to figure out day 5 forecast
      var d5tempresponse = data.daily[4].temp.day
      console.log("day 5 temp console log",d5tempresponse)
      var d5templocal = d5tempresponse;
      localStorage.setItem("day5temp", JSON.stringify(d5templocal));
      console.log("send day 5 temp to local storage")
      let d5gettemplocal = localStorage.getItem("day5temp")
      console.log("get day 5 temp from local storage")
      myday5tempreturned.textContent = d5gettemplocal;
      console.log("send day 5 temp to placeholder")
    //day5 //wind
      var d5windresponse = data.daily[4].wind_speed
      console.log("day 5 temp console log",d5windresponse)
      var d5windlocal = d5windresponse;
      localStorage.setItem("day5wind", JSON.stringify(d5windlocal));
      console.log("send day 5 wind to local storage")
      let d5getwindlocal = localStorage.getItem("day1wind")
      console.log("get day 5 wind from local storage")
      myday5windreturned.textContent = d5getwindlocal;
      console.log("send day 5 wind to placeholder")
     //day5 //humidity
      var d5humidityresponse = data.daily[4].humidity
      console.log("day 5 temp console log",d5windresponse)
      var d5humiditylocal = d5humidityresponse;
      localStorage.setItem("day5humidity", JSON.stringify(d5humiditylocal));
      console.log("send day 5 humidity to local storage")
      let d5gethumiditylocal = localStorage.getItem("day5humidity")
      console.log("get day 5 humidity from local storage")
      myday5humidityreturned.textContent = d5gethumiditylocal;
      console.log("send day 5 humidity to placeholder")
      //localStorage.clear();
    });
  }


// // // // //******geo fetch to get coordinates to be added */
// // //http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// // function getcities(){
// //   alert("search cities")
// //   var cities = document.getElementById('getcity');
// //   // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=phoenix,az,&limit=5&appid=28d013b4a4d9e3e9a69260ea9b7115ae')
// //   // .then(response => response.json())
// //   // .then(function (data) {   
// //     console.log("fetch cities",data)
// //   };
// // // );
// // // }

// // //******completed function to get weather
// var citylat = "42.3314"
// var citylong = "83.0458"
// var api = "bca1f98c84ed35d338edb95341f576da"

// var citylat = "42.3314"
// var citylong = "83.0458"
// var api = "bca1f98c84ed35d338edb95341f576da"

// function getWeather(){
// //   alert("click ok to search detroit weather information        ...more cities options coming soon.")
//   fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${citylat}&lon=${citylong}&units=imperial&exclude=minutely,alerts&appid=${api}`)
//     .then(res => res.json())
//     .then(data => {console.log(data);
// //   // var theweather = document.getElementById('scity');
//     //temp
//       var tempresponse = data.current.temp
//       console.log("temp console log",tempresponse)
//       var tlocal = tempresponse;
//       localStorage.setItem("temp", JSON.stringify(tlocal));
//       console.log("send temp to local storage")
//       let gettemplocal = localStorage.getItem("temp")
//       console.log("get current temp from local storage")
//       mytempreturned.textContent = gettemplocal;
//       console.log("send current temp to placeholder")
//       //close test function
//     //windspeed
//       var windspeedresponse = data.current.wind_speed
//       console.log("wind speed console log",windspeedresponse)
//       var wslocal =windspeedresponse;
//       localStorage.setItem("wind speed", JSON.stringify(wslocal));
//       console.log("send windspeed to local storage")
//       let getwindlocal = localStorage.getItem("wind speed")
//       console.log("get current wind from local storage")
//       mywindreturned.textContent = getwindlocal;
//       console.log("send current wind to placeholder")
//     // humidity       // dataseries[0].weather??
//       var humidityresponse = data.current.humidity
//       console.log("humidity console log",humidityresponse)
//       var hlocal = humidityresponse;
//       localStorage.setItem("humidity", JSON.stringify(hlocal));
//       console.log("send humidity to local storage")
//       let gethumiditylocal = localStorage.getItem("humidity")
//       console.log("get current humidity from local storage")
//       myhumidityreturned.textContent = gethumiditylocal;
//       console.log("send current humidity to placeholder")
//     //  uv index
//       var uvindexresponse = data.current.uvi
//       console.log("uv index console log", uvindexresponse)
//       var uvlocal =uvindexresponse;
//       localStorage.setItem("uv index", JSON.stringify(uvlocal));
//       console.log("send uv index to local storage")
//       let getuvindexlocal = localStorage.getItem("uv index")
//       console.log("get current uvindex from local storage")
//       myuvindexreturned.textContent = getuvindexlocal;
//       console.log("send current uvindex to placeholder")
//      // localStorage.clear();
//   });
// }
// 

// scity.addEventListener("click", getWeather);

// // ===========================================

// // //******completed function to get weather except need to finish defining
// function getFiveday(){
//   var weather = document.getElementById('fiveday');
//   fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=42.3314&lon=83.0458&units=imperial&exclude=minutely,alerts&appid=28d013b4a4d9e3e9a69260ea9b7115ae`)
//   .then(response => response.json())
//   .then(function (data) {   
//     console.log("fetch 5day results from api",data)
//     //******1
//     //day1 need to figure out day icon
//     //to get icon use data.daily[0].weather[0].icon
//     //will use icon description I can get icon list download set up to get from local storage 
//       var d1iconresponse = data.daily[0].weather[0].description
//       console.log("day 1 icon console log",d1iconresponse)
//       var d1iconlocal = d1iconresponse;
//       localStorage.setItem("day1icon", JSON.stringify(d1iconlocal));
//       console.log("send day 1 icon to local storage")    
//       let d1geticonlocal = localStorage.getItem("day1icon")
//       console.log("get day 1 icon from local storage")
//       myday1iconreturned.textContent = d1geticonlocal;
//       console.log("send day 1 icon to placeholder")
//     //day1 //need to figure out day 1 forecast
//       var d1tempresponse = data.daily[0].temp.day
//       console.log("day 1 temp console log",d1tempresponse)
//       var d1templocal = d1tempresponse;
//       localStorage.setItem("day1temp", JSON.stringify(d1templocal));
//       console.log("send day 1 temp to local storage")
//       let d1gettemplocal = localStorage.getItem("day1temp")
//       console.log("get day 1 temp from local storage")
//       myday1tempreturned.textContent = d1gettemplocal;
//       console.log("send day 1 temp to placeholder")
//     // //day1 //wind
//       var d1windresponse = data.daily[0].wind_speed
//       console.log("day 1 temp console log",d1windresponse)
//       var d1windlocal = d1windresponse;
//       localStorage.setItem("day1wind", JSON.stringify(d1windlocal));
//       console.log("send day 1 wind to local storage")
//       let d1getwindlocal = localStorage.getItem("day1wind")
//       console.log("get day 1 wind from local storage")
//       myday1windreturned.textContent = d1getwindlocal;
//       console.log("send day 1 wind to placeholder")
//     //  //day1 //humidity
//       var d1humidityresponse = data.daily[0].humidity
//       console.log("day 1 temp console log",d1windresponse)
//       var d1humiditylocal = d1humidityresponse;
//       localStorage.setItem("day1humidity", JSON.stringify(d1humiditylocal));
//       console.log("send day 1 humidity to local storage")
//       let d1gethumiditylocal = localStorage.getItem("day1wind")
//       console.log("get day 1 humidity from local storage")
//       myday1humidityreturned.textContent = d1gethumiditylocal;
//       console.log("send day 1 humidity to placeholder")
//     //******2
//     //day2 need to figure out day icon
//     //to get icon use data.daily[0].weather[0].icon
//     //icon description is always weather[0].description but daily number changes
//     //will use icon description I can get icon list download set up to get from local storage 
//       var d2iconresponse = data.daily[1].weather[0].description
//       console.log("day 2 icon console log",d2iconresponse)
//       var d2iconlocal = d2iconresponse;
//       localStorage.setItem("day2icon", JSON.stringify(d2iconlocal));
//       console.log("send day 2 icon to local storage")
//       let d2geticonlocal = localStorage.getItem("day2icon")
//       console.log("get day 2 icon from local storage")
//       myday2iconreturned.textContent = d2geticonlocal;
//       console.log("send day 2 icon to placeholder")
//     //day2 //need to figure out day 2 forecast
//       var d2tempresponse = data.daily[1].temp.day
//       console.log("day 2 temp console log",d2tempresponse)
//       var d2templocal = d2tempresponse;
//       localStorage.setItem("day2temp", JSON.stringify(d2templocal));
//       console.log("send day 2 temp to local storage")
//       let d2gettemplocal = localStorage.getItem("day2temp")
//       console.log("get day 2 temp from local storage")
//       myday2tempreturned.textContent = d2gettemplocal;
//       console.log("send day 2 temp to placeholder")
//     //day2 //wind
//       var d2windresponse = data.daily[1].wind_speed
//       console.log("day 2 temp console log",d2windresponse)
//       var d2windlocal = d2windresponse;
//       localStorage.setItem("day2wind", JSON.stringify(d2windlocal));
//       console.log("send day 2 wind to local storage")
//       let d2getwindlocal = localStorage.getItem("day2wind")
//       console.log("get day 2 wind from local storage")
//       myday2windreturned.textContent = d2getwindlocal;
//       console.log("send day 2 wind to placeholder")
//      //day2 //humidity
//       var d2humidityresponse = data.daily[1].humidity
//       console.log("day 2 temp console log",d2windresponse)
//       var d2humiditylocal = d2humidityresponse;
//       localStorage.setItem("day2humidity", JSON.stringify(d2humiditylocal));
//       console.log("send day 2 humidity to local storage")
//       let d2gethumiditylocal = localStorage.getItem("day2humidity")
//       console.log("get day 2 humidity from local storage")
//       myday2humidityreturned.textContent = d2gethumiditylocal;
//       console.log("send day 2 humidity to placeholder")
//     //******3
//     //day3 //need to figure out day icon
//         //to get icon use data.daily[0].weather[0].icon
//         //icon description is always weather[0].description but daily number changes
//        //will use icon description I can get icon list download set up to get from local storage 
//       var d3iconresponse = data.daily[2].weather[0].description
//       console.log("day 3 icon console log",d3iconresponse)
//       var d3iconlocal = d3iconresponse;
//       localStorage.setItem("day3icon", JSON.stringify(d3iconlocal));
//       console.log("send day 3 icon to local storage")
//       let d3geticonlocal = localStorage.getItem("day3icon")
//       console.log("get day 3 icon from local storage")
//       myday3iconreturned.textContent = d3geticonlocal;
//       console.log("send day 3 icon to placeholder")
//     //day3 //need to figure out day 3 forecast
//       var d3tempresponse = data.daily[2].temp.day
//       console.log("day 3 temp console log",d3tempresponse)
//       var d3templocal = d3tempresponse;
//       localStorage.setItem("day3temp", JSON.stringify(d3templocal));
//       console.log("send day 3 temp to local storage")
//       let d3gettemplocal = localStorage.getItem("day3temp")
//       console.log("get day 3 temp from local storage")
//       myday3tempreturned.textContent = d3gettemplocal;
//       console.log("send day 3 temp to placeholder")
//     //day3 //wind
//       var d3windresponse = data.daily[2].wind_speed
//       console.log("day 3 temp console log",d3windresponse)
//       var d3windlocal = d3windresponse;
//       localStorage.setItem("day3wind", JSON.stringify(d3windlocal));
//       console.log("send day 3 wind to local storage")
//       let d3getwindlocal = localStorage.getItem("day3wind")
//       console.log("get day 3 wind from local storage")
//       myday3windreturned.textContent = d3getwindlocal;
//       console.log("send day 3 wind to placeholder")
//     //day3 //humidity
//       var d3humidityresponse = data.daily[2].humidity
//       console.log("day 3 temp console log",d3windresponse)
//       var d3humiditylocal = d3humidityresponse;
//       localStorage.setItem("day3humidity", JSON.stringify(d3humiditylocal));
//       console.log("send day 3 humidity to local storage")
//       let d3gethumiditylocal = localStorage.getItem("day3humidity")
//       console.log("get day 3 humidity from local storage")
//       myday3humidityreturned.textContent = d3gethumiditylocal;
//       console.log("send day 3 humidity to placeholder")
//     //******4
//     //day4 //need to figure out day icon
//       //to get icon use data.daily[0].weather[0].icon
//       //icon description is always weather[0].description but daily number changes
//       //will use icon description I can get icon list download set up to get from local storage 
//       var d4iconresponse = data.daily[3].weather[0].description
//       console.log("day 4 icon console log",d4iconresponse)
//       var d4iconlocal = d4iconresponse;
//       localStorage.setItem("day4icon", JSON.stringify(d4iconlocal));
//       console.log("send day 4 icon to local storage")
//       let d4geticonlocal = localStorage.getItem("day4icon")
//       console.log("get day 4 icon from local storage")
//       myday4iconreturned.textContent = d4geticonlocal;
//       console.log("send day 4 icon to placeholder")
//     //day4 //need to figure out day 4 forecast
//       var d4tempresponse = data.daily[3].temp.day
//       console.log("day 4 temp console log",d4tempresponse)
//       var d4templocal = d4tempresponse;
//       localStorage.setItem("day4temp", JSON.stringify(d4templocal));
//       console.log("send day 4 temp to local storage")
//       let d4gettemplocal = localStorage.getItem("day4temp")
//       console.log("get day 4 temp from local storage")
//       myday4tempreturned.textContent = d4gettemplocal;
//       console.log("send day 4 temp to placeholder")
//     //day4 //wind
//       var d4windresponse = data.daily[3].wind_speed
//       console.log("day 4 wind console log",d4windresponse)
//       var d4windlocal = d4windresponse;
//       localStorage.setItem("day4wind", JSON.stringify(d4windlocal));
//       console.log("send day 4 wind to local storage")
//       let d4getwindlocal = localStorage.getItem("day1wind")
//       console.log("get day 4 wind from local storage")
//       myday4windreturned.textContent = d4getwindlocal;
//       console.log("send day 4 wind to placeholder")
//      //day4 //humidity
//       var d4humidityresponse = data.daily[3].humidity
//       console.log("day 4 humidity console log",d4windresponse)
//       var d4humiditylocal = d4humidityresponse;
//       localStorage.setItem("day4humidity", JSON.stringify(d4humiditylocal));
//       console.log("send day 4 humidity to local storage")
//       let d4gethumiditylocal = localStorage.getItem("day4humidity")
//       console.log("get day 4 humidity from local storage")
//       myday4humidityreturned.textContent = d4gethumiditylocal;
//       console.log("send day 4 humidity to placeholder")
//     //******5
//     //day5 //need to figure out day icon
//       //to get icon use data.daily[0].weather[0].icon
//       //icon description is always weather[0].description but daily number changes
//       //will use icon description I can get icon list download set up to get from local storage 
//       var d5iconresponse = data.daily[4].weather[0].description
//       console.log("day 5 icon console log",d5iconresponse)
//       var d5iconlocal = d5iconresponse;
//       localStorage.setItem("day5icon", JSON.stringify(d5iconlocal));
//       console.log("send day 5 icon to local storage")
//       let d5geticonlocal = localStorage.getItem("day5icon")
//       console.log("get day 5 icon from local storage")
//       myday5iconreturned.textContent = d5geticonlocal;
//       console.log("send day 5 icon to placeholder")
//     //day5 //need to figure out day 5 forecast
//       var d5tempresponse = data.daily[4].temp.day
//       console.log("day 5 temp console log",d5tempresponse)
//       var d5templocal = d5tempresponse;
//       localStorage.setItem("day5temp", JSON.stringify(d5templocal));
//       console.log("send day 5 temp to local storage")
//       let d5gettemplocal = localStorage.getItem("day5temp")
//       console.log("get day 5 temp from local storage")
//       myday5tempreturned.textContent = d5gettemplocal;
//       console.log("send day 5 temp to placeholder")
//     //day5 //wind
//       var d5windresponse = data.daily[4].wind_speed
//       console.log("day 5 temp console log",d5windresponse)
//       var d5windlocal = d5windresponse;
//       localStorage.setItem("day5wind", JSON.stringify(d5windlocal));
//       console.log("send day 5 wind to local storage")
//       let d5getwindlocal = localStorage.getItem("day1wind")
//       console.log("get day 5 wind from local storage")
//       myday5windreturned.textContent = d5getwindlocal;
//       console.log("send day 5 wind to placeholder")
//      //day5 //humidity
//       var d5humidityresponse = data.daily[4].humidity
//       console.log("day 5 temp console log",d5windresponse)
//       var d5humiditylocal = d5humidityresponse;
//       localStorage.setItem("day5humidity", JSON.stringify(d5humiditylocal));
//       console.log("send day 5 humidity to local storage")
//       let d5gethumiditylocal = localStorage.getItem("day5humidity")
//       console.log("get day 5 humidity from local storage")
//       myday5humidityreturned.textContent = d5gethumiditylocal;
//       console.log("send day 5 humidity to placeholder")
//       //localStorage.clear();
//   });
// }

// scity.addEventListener("click", getWeather);
// scity.addEventListener("click", getFiveday);

// // // //////////////////////ADD cities to list stil need to work///////////////   
// // // var mysavedcityreturned = document.getElementById('mysavedcityreturned'); 

// // // function savecityname() {({
// // //   var savedcity = "savedcity";
// // //   console.log("saved city");
// // //   localStorage.setItem("savedcity", ());
// // //   console.log("send city added to local storage") 
// // //   let mysavedcityreturned = localStorage.getItem("cityname")
// // //   console.log("get saved city")
// // // })
// // // };

// // // //       var d5humidityresponse = data.daily[4].humidity
// // // //       console.log("day 5 temp console log",d5windresponse)
// // // //       var d5humiditylocal = d5humidityresponse;
// // // //       localStorage.setItem("day5humidity", JSON.stringify(d5humiditylocal));
// // // //       console.log("send day 5 humidity to local storage")
// // // //       let d5gethumiditylocal = localStorage.getItem("day5humidity")
// // // //       console.log("get day 5 humidity from local storage")
// // // //       myday5humidityreturned.textContent = d5gethumiditylocal;
// // // //       console.log("send day 5 humidity to placeholder")

// // // savedcity.addEventListener("click", saveCity);

// // // //buttons
// // // var savecityButtonEl = $('#savecityb');
// // // var deletecityButtonEl = $('#deletecity-btn');
// // // //list
// // // var cityForm9El = $('#city-form');
// // // var cityList9El = $('#city-list');

// // // function handlecityFormSubmit(event) {
// // //   event.preventDefault();
// // //   var cityItem9 = $('input[name="city-input"]').val();
// // //   if (!cityItem9) {
// // //     event9.preventDefault();
// // //     console.log('city was not filled in');
// // //     return;
// // //   }
// // //   // var lstorage
// // //   var cityinfo = $('input[name="city-input"]').val();
// // //   localStorage.setItem('input[name="city-input9"]', cityinfo);
// // //   console.log('city info sent to local storage')

// // //   // var taskList;
// // //   var cityListItemEl = $(
// // //     '<li class="flex-row justify-space-between align-center p-2 bg-light text-dark">'
// // //   );
// // //   cityListItemEl.text(cityItem);
// // //   cityListEl.append(
// // //     '<button class="btn-small deletecity-btn">remove city</button>'
// // //   );
// // //   cityListEl.append(cityListItemEl);
// // //   $('input[name="task-input9"]').val('');
// // // }

// // // function handleRemoveCities (event) {
// // //   var btnClicked = $(event.target);
// // //   btnClicked.parent('li').remove();
// // //   alert('To delete city click ok');
// // //   console.log('City is removed');
// // // }

// // // cityListEl.on('click', '.deletecity-btn', handleRemoveCities);
// // // cityFormEl.on('remove', handlecityFormSubmit);
