function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.48&lon=127.0&appid=3a41a817835787a38ae32beb2052d4fc')
    .then(response => {
        return response.json();
    })
    .then(data => {
        const weather = data.weather[0].id;
        const temp = Math.round(data.main.temp)-273;

        document.getElementById('avgTemp').innerHTML = `${temp}°`

        console.log(weather);

        return weather;
    })

    //WEATHER INDEX: 0:맑음 1: 흐림 2: 비 3: 눈 4: 에러
    .then(weather => {
        const StatusIndicator = Math.floor(weather/100);
        
        if (weather == 800) {

            return 0;
        } else if (StatusIndicator == 2 || StatusIndicator == 8) {

            return 1;
        } else if (StatusIndicator == 3 || StatusIndicator == 5){

            return 2;
        } else if (StatusIndicator == 6){

            return 3;
        } else{

            return 4;
        }
    })

    .then(Indicator => {
        switch(Indicator){
            case 0:
                document.getElementById('weathericon').src = 'content/weather/sunny.svg';

                console.log('sunny!');
                break;

            case 1:
                document.getElementById('weathericon').src = 'content/weather/cloudy.svg'
                break;
            case 2:
                document.getElementById('weathericon').src = 'content/weather/rainy.svg'
                break;
            case 3:
                document.getElementById('weathericon').src = 'content/weather/snowy.svg'
                break;
            case 4:
                document.getElementById('weathericon').src = 'content/weather/error.svg'
                break;
        }


    }) 


}


getWeather()
