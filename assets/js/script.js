//   http://api.openweathermap.org/geo/1.0/direct?q=Chicago&limit=5&appid=b3116830bb7295ca81c53365dc533b51

//Chicago lat= 41.881832 lon= -87.623177
// https://api.openweathermap.org/data/2.5/forecast?lat=41.881832&lon=-87.623177&appid=b3116830bb7295ca81c53365dc533b51

// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=chicago&units=imperial&appid=b3116830bb7295ca81c53365dc533b51';

var btnGet = document.getElementById('btn-get')
var inputGet = document.getElementById('input-get')
var cityName = '';
var searchHistoryContainer = document.querySelector('#history');
//var searchHistory;

//console.log(btnGet);

//for (var i = storedSearch.length -1; i > storedSearch.length-7; i--)

//
//Dynamic button history add btnHistory class


// define a set of instruction to display old search history
// --  go to local storage and try to get the search history

// var searchFromLs = JSON.parse(localStorage.getItem('search-history'));
// if (searchFromLs !== null) {
//     searchHistory = searchFromLs
// } else {
//     searchHistory = [];
// }

searchHistory = JSON.parse(localStorage.getItem('search-history'));
if (searchHistory === null) {
    searchHistory = [];
}
displaySearchHistory();
// --  if there is something there
// --  -- set the stuff you got from ls to the searchHistory var
// --  else 
// --  -- set search history to an empty
// --  display you search history

// call that set of instructions




function addToHistory(search) {
    searchHistory.push(search);
    //converts array to string
    localStorage.setItem('search-history', JSON.stringify(searchHistory));

    displaySearchHistory();
}

// need function to get search history from local storage parse JSON
function displaySearchHistory() {
    searchHistoryContainer.innerHTML = '';
    for (let index = 0; index < searchHistory.length; index++) {
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.classList.add('history-btn', 'btn-history')
        btn.setAttribute('data-search', searchHistory[index]);
        btn.textContent = searchHistory[index];
        
        
        searchHistoryContainer.append(btn);    
        }
}

        
        // add an event listner  to the btn to make new buttons fetch the search
        // when i click on the new button it should bring me to the citys weather
        //////////////
// function handleSearchHistoyClick(event) {
//        var test = event.target('button');

//          newendUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + test + '&units=imperial&appid=b3116830bb7295ca81c53365dc533b51');


        // if (test) {
        //      searchResult(btn.textContent);
        // }
           
        // if (searchHistory === null) {
            //     return;
            // } else {
            // searchResult('btn.textContent') = (event.target.matches(event))   
            // }



        

function searchResult() {
    console.log(inputGet.value)
    var city = inputGet.value;
    cityName = inputGet.value;
    var endUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=b3116830bb7295ca81c53365dc533b51');

    addToHistory(cityName);

    //Fetch section
    fetch(endUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //console.log('Weather \n----------');
            //console.log(data);
            //console.log(data.city.name);

            function weatherIconMain() {
                //for (var i = storedSearch.length -1; i > storedSearch.length-7; i--)

                if ((data.list[0].weather[0].main) === 'Clouds') {
                    document.getElementById('current-icon').innerHTML = ('&#9729;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Clear') {
                    document.getElementById('current-icon').innerHTML = ('&#9728;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Snow') {
                    document.getElementById('current-icon').innerHTML = ('&#9731;' + (data.list[0].weather[0].main));
                } else if ((data.list[0].weather[0].main) === 'Rain') {
                    document.getElementById('current-icon').innerHTML = ('&#9730;' + (data.list[0].weather[0].main));
                } else {
                    document.getElementById('current-icon').innerHTML = ('&#9749;' + (data.list[0].weather[0].main));
                }

                if ((data.list[8].weather[0].main) === 'Clouds') {
                    document.getElementById('day1-icon').innerHTML = ('&#9729;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Clear') {
                    document.getElementById('day1-icon').innerHTML = ('&#9728;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Snow') {
                    document.getElementById('day1-icon').innerHTML = ('&#9731;' + (data.list[8].weather[0].main));
                } else if ((data.list[8].weather[0].main) === 'Rain') {
                    document.getElementById('day1-icon').innerHTML = ('&#9730;' + (data.list[8].weather[0].main));
                } else {
                    document.getElementById('day1-icon').innerHTML = ('&#9749;' + (data.list[8].weather[0].main));
                }

                if ((data.list[16].weather[0].main) === 'Clouds') {
                    document.getElementById('day2-icon').innerHTML = ('&#9729;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Clear') {
                    document.getElementById('day2-icon').innerHTML = ('&#9728;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Snow') {
                    document.getElementById('day2-icon').innerHTML = ('&#9731;' + (data.list[16].weather[0].main));
                } else if ((data.list[16].weather[0].main) === 'Rain') {
                    document.getElementById('day2-icon').innerHTML = ('&#9730;' + (data.list[16].weather[0].main));
                } else {
                    document.getElementById('day2-icon').innerHTML = ('&#9749;' + (data.list[16].weather[0].main));
                }

                if ((data.list[24].weather[0].main) === 'Clouds') {
                    document.getElementById('day3-icon').innerHTML = ('&#9729;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Clear') {
                    document.getElementById('day3-icon').innerHTML = ('&#9728;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Snow') {
                    document.getElementById('day3-icon').innerHTML = ('&#9731;' + (data.list[24].weather[0].main));
                } else if ((data.list[24].weather[0].main) === 'Rain') {
                    document.getElementById('day3-icon').innerHTML = ('&#9730;' + (data.list[24].weather[0].main));
                } else {
                    document.getElementById('day3-icon').innerHTML = ('&#9749;' + (data.list[24].weather[0].main));
                }

                if ((data.list[32].weather[0].main) === 'Clouds') {
                    document.getElementById('day4-icon').innerHTML = ('&#9729;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Clear') {
                    document.getElementById('day4-icon').innerHTML = ('&#9728;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Snow') {
                    document.getElementById('day4-icon').innerHTML = ('&#9731;' + (data.list[32].weather[0].main));
                } else if ((data.list[32].weather[0].main) === 'Rain') {
                    document.getElementById('day4-icon').innerHTML = ('&#9730;' + (data.list[32].weather[0].main));
                } else {
                    document.getElementById('day4-icon').innerHTML = ('&#9749;' + (data.list[32].weather[0].main));
                }

                if ((data.list[39].weather[0].main) === 'Clouds') {
                    document.getElementById('day5-icon').innerHTML = ('&#9729;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Clear') {
                    document.getElementById('day5-icon').innerHTML = ('&#9728;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Snow') {
                    document.getElementById('day5-icon').innerHTML = ('&#9731;' + (data.list[39].weather[0].main));
                } else if ((data.list[39].weather[0].main) === 'Rain') {
                    document.getElementById('day5-icon').innerHTML = ('&#9730;' + (data.list[39].weather[0].main));
                } else {
                    document.getElementById('day5-icon').innerHTML = ('&#9749;' + (data.list[39].weather[0].main));
                }
            }

            weatherIconMain();
            
    
            

            //main panel showing selected city
            document.getElementById('selected-city').innerHTML = (data.city.name + ' (' + (dayjs().format('MM/DD/YYYY')) + ')');
            //Current temp day0
            document.getElementById('currnet-temp').innerHTML = ('Temp: ' + (data.list[0].main.temp + 'ºF'));
            document.getElementById('current-wind').innerHTML = ('Wind: ' + (data.list[0].wind.speed) + ' MPH');
            document.getElementById('current-humidity').innerHTML = ('Humidity: ' + (data.list[0].main.humidity) + '%');

            //format('MM/DD/YYYY'));
            //Tomorrow temp day1
            document.getElementById('day1').innerHTML = (dayjs().add(1, 'day').format('MM/DD/YYYY'));
            document.getElementById('day1-temp').innerHTML = ('Temp: ' + (data.list[8].main.temp) + 'ºF');
            document.getElementById('day1-wind').innerHTML = ('Wind: ' + (data.list[8].wind.speed) + ' MPH');
            document.getElementById('day1-humidity').innerHTML = ('Humidity: ' + (data.list[8].main.humidity) + ' %');
            //day2
            document.getElementById('day2').innerHTML = (dayjs().add(2, 'day').format('MM/DD/YYYY'));
            document.getElementById('day2-temp').innerHTML = ('Temp: ' + (data.list[16].main.temp) + 'ºF');
            document.getElementById('day2-wind').innerHTML = ('Wind: ' + (data.list[16].wind.speed) + ' MPH');
            document.getElementById('day2-humidity').innerHTML = ('Humidity: ' + (data.list[16].main.humidity) + ' %');
            //day3
            document.getElementById('day3').innerHTML = (dayjs().add(3, 'day').format('MM/DD/YYYY'));
            document.getElementById('day3-temp').innerHTML = ('Temp: ' + (data.list[24].main.temp) + 'ºF');
            document.getElementById('day3-wind').innerHTML = ('Wind: ' + (data.list[24].wind.speed) + ' MPH');
            document.getElementById('day3-humidity').innerHTML = ('Humidity: ' + (data.list[24].main.humidity) + ' %');
            //day4
            document.getElementById('day4').innerHTML = (dayjs().add(4, 'day').format('MM/DD/YYYY'));
            document.getElementById('day4-temp').innerHTML = ('Temp: ' + (data.list[32].main.temp) + 'ºF');
            document.getElementById('day4-wind').innerHTML = ('Wind: ' + (data.list[32].wind.speed) + ' MPH');
            document.getElementById('day4-humidity').innerHTML = ('Humidity: ' + (data.list[32].main.humidity) + ' %');
            //day5 -3 hour ran out of array
            document.getElementById('day5').innerHTML = (dayjs().add(5, 'day').format('MM/DD/YYYY'));
            document.getElementById('day5-temp').innerHTML = ('Temp: ' + (data.list[39].main.temp) + 'ºF');
            document.getElementById('day5-wind').innerHTML = ('Wind: ' + (data.list[39].wind.speed) + ' MPH');
            document.getElementById('day5-humidity').innerHTML = ('Humidity: ' + (data.list[39].main.humidity) + ' %');
            //handleSearchHistoyClick('search-history');
        });
}



btnGet.addEventListener('click', searchResult);
 //searchHistoryContainer.addEventListener('click', handleSearchHistoyClick)

//var cityName = '';
//cityName = 'new york';



// var endUrl = ('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=b3116830bb7295ca81c53365dc533b51');


//console.log(endUrl);
// clouds  &#9729;
// clear   &#9728;
// snow    &#9731;
// rain    &#9730;

//cityName = 'el paso';



//     //needs custom attr for each button
//     var btn = event.target;
//     var btnSearch = btn.getAttribute('data-search')

//     // searchResult(btnSearch);
//     console.log(btnSearch);
    
