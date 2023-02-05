//   http://api.openweathermap.org/geo/1.0/direct?q=Chicago&limit=5&appid=b3116830bb7295ca81c53365dc533b51

//Chicago lat= 41.881832 lon= -87.623177
// https://api.openweathermap.org/data/2.5/forecast?lat=41.881832&lon=-87.623177&appid=b3116830bb7295ca81c53365dc533b51


var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b3116830bb7295ca81c53365dc533b51';

var cityName = 'chicago';

//cityName = 'el paso';

var endUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=b3116830bb7295ca81c53365dc533b51')


console.log(endUrl);

fetch(endUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Weather \n----------');
    console.log(data);
    console.log(data.city.name);
    
    
    //Current temp day0
    console.log(data.list[0].main.temp)
    console.log(data.list[0].weather[0].main)
    console.log(data.list[0].wind.speed)
    console.log(data.list[0].main.humidity)
    //Tomorrow temp day1
    console.log(data.list[8].main.temp)
    console.log(data.list[8].weather[0].main)
    console.log(data.list[8].wind.speed)
    console.log(data.list[8].main.humidity)
    //day2
    console.log(data.list[16].main.temp)
    console.log(data.list[16].weather[0].main)
    console.log(data.list[16].wind.speed)
    console.log(data.list[16].main.humidity)
    //day3
    console.log(data.list[24].main.temp)
    console.log(data.list[24].weather[0].main)
    console.log(data.list[24].wind.speed)
    console.log(data.list[24].main.humidity)
    //day4
    console.log(data.list[32].main.temp)
    console.log(data.list[32].weather[0].main)
    console.log(data.list[32].wind.speed)
    console.log(data.list[32].main.humidity)
    //day5 -3 hour ran out of array
    console.log(data.list[39].main.temp)
    console.log(data.list[39].weather[0].main)
    console.log(data.list[39].wind.speed)
    console.log(data.list[39].main.humidity)


    // TODO: Loop through the response
    // TODO: Console log each 
    // for (var i = 0; i < data.length; i++) {
    //   console.log(data[i].city);
    // }
    // if (data[i].city.coord.lat >= 20){
    //   console.log(data[i].city);
    // }  
  });


  // list.0.main.temp
  // list[0].main.temp

cityName = 'new york';