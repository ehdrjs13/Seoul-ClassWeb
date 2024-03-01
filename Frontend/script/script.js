//From Legacy Code
//init date setting

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
currentDayIndex = currentDate.getDay(); //날짜 가져오기
let currnentHour = currentDate.getHours();

const dayName = ['sun', 'mon', 'thu', 'wed', 'thur', 'fri', 'sat'];
dayNamed = dayName[currentDayIndex] //stringfy dayIndex


//yyyymmdd date code generation
today = '20231106'
// today = `${year}${month}${day}`;

if(currnentHour >= 17 && currentDayIndex != 0 && currentDayIndex != 6){
    currentDayIndex = currentDayIndex + 1;
    day = String(Number(day) + 1);
    if (day.length == 1) {
        day = '0' + day;
    };
    console.log('17hAdjustment');
    document.getElementById('scheduleTitle').innerHTML = '내일의 시간표';
    document.getElementById('menuTitle').innerHTML = '내일의 급식';
};

if(currentDayIndex == 6){
    currentDayIndex = 1;
    day = String(Number(day) + 2);
    if (day.length == 1) {
        day = '0' + day;
    };
    document.getElementById('scheduleTitle').innerHTML = '월요일 시간표';
    document.getElementById('menuTitle').innerHTML = '월요일 급식';
}

if(currentDayIndex == 0){
    currentDayIndex = 1;
    day = String(Number(day) + 1);
    if (day.length == 1) {
        day = '0' + day;
    };
    document.getElementById('scheduleTitle').innerHTML = '내일 시간표';
    document.getElementById('menuTitle').innerHTML = '내일 급식';
    // console.log(day)
}


