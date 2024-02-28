function getSchedule(){
    const dayIndex = dayName[currentDayIndex];

    const timeIndex = 1;



    fetch("https://seoul-server.run.goorm.io:443/getSchedule?position=('${dayIndex}',${timeIndex})",{method: 'GET',
    mode: 'cors'})
    .then(response => {
        console.log(response);
    }) 
}

getSchedule()