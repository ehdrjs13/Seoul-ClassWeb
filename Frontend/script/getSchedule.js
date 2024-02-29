function getSchedule(){
    const dayIndex = dayName[currentDayIndex];

    const timeIndex = 1;



    fetch("http://127.0.0.1:200/getSchedule?position=('${dayIndex}',${timeIndex})",{method: 'GET',
    mode: 'cors'})
    .then(response => {
        console.log(response);
    }) 
}

getSchedule()