function getSchedule(day,time){
    const dayIndex = day

    const timeIndex = time;

    console.log(dayIndex);



    fetch(`http://127.0.0.1:200/getSchedule?day=${dayIndex}&time=${timeIndex}`, 

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



    fetch(`http://127.0.0.1:200/getAllSchedule?day=${dayIndex}`, 

    )
    .then(response => {
        console.log(response);
        // return response.json();  --응답 상태 보기용, 평소에는 주석처리하기. 
    })
    .then(data => {
            console.log(data);
            return data.json;
        });
            
    }



//TEST Sequence
const day_named = dayName[currentDayIndex];

console.log('data: ',getAllSchedule(day_named));



