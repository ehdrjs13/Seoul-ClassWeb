function getSchedule(day,time){
    const dayIndex = day

    const timeIndex = time;

    console.log(dayIndex);



    fetch(`http://127.0.0.1:200/getAllSchedule?day=${dayIndex}&time=${timeIndex}`, 

    )
    .then(response => {
        console.log(response);
        return response.json(); 
    })
    .then(data => {
            console.log(data);
            return data.json;
        });
            
    }

function getAllSchedule(day){
    const dayIndex = day


    console.log(dayIndex);



    fetch(`http://127.0.0.1:200/getAllSchedule?day=${dayIndex}`)
    .then(response => {
        console.log(response);
        return response.json();  
    })
    .then(data => {
            console.log('DATA:',data);

            let scheduleData = data;

            let time1, time2, time3, time4, time5, time6, time7;

            scheduleData.content.forEach(item => {
                switch (item.TIME) {
                    case 1:
                        time1 = item.Content;
                        break;
                    case 2:
                        time2 = item.Content;
                        break;
                    case 3:
                        time3 = item.Content;
                        break;
                    case 4:
                        time4 = item.Content;
                        break;
                    case 5:
                        time5 = item.Content;
                        break;
                    case 6:
                        time6 = item.Content;
                        break;
                    case 7:
                        time7 = item.Content;
                        break;
                    default:
                        break;
                }
            });

            console.log(time1,time2,time3,time4,time5,time6,time7);

            adjustScheduleTable(time1,time2,time3,time4,time5,time6,time7);

            
            return data;
        });
            
    }

function adjustScheduleTable(time1, time2, time3, time4, time5, time6,time7){
    document.getElementById('1st').innerHTML = time1;
    document.getElementById('2nd').innerHTML = time2;
    document.getElementById('3rd').innerHTML = time3;
    document.getElementById('4th').innerHTML = time4;
    document.getElementById('5th').innerHTML = time5;
    document.getElementById('6th').innerHTML = time6;
    document.getElementById('7th').innerHTML = time7;
    

}

   


//TEST Sequence
const day_named = dayName[currentDayIndex]

getAllSchedule(day_named)









