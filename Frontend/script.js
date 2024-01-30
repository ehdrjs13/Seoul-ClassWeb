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
    document.getElementById('todayschedule').innerHTML = '내일의 시간표';
    document.getElementById('todaymenus').innerHTML = '내일의 급식';
};

if(currentDayIndex == 6){
    currentDayIndex = 1;
    day = String(Number(day) + 2);
    if (day.length == 1) {
        day = '0' + day;
    };
    document.getElementById('todayschedule').innerHTML = '월요일 시간표';
    document.getElementById('todaymenus').innerHTML = '월요일 급식';
}

if(currentDayIndex == 0){
    currentDayIndex = 1;
    day = String(Number(day) + 1);
    if (day.length == 1) {
        day = '0' + day;
    };
    document.getElementById('todayschedule').innerHTML = '내일 시간표';
    document.getElementById('todaymenus').innerHTML = '내일 급식';
    // console.log(day)
}

function getMenu(){
    $.ajax({
    method: "GET",
    url: "https://open.neis.go.kr/hub/mealServiceDietInfo",
    data: {
        KEY: 'd063062b50b8496a8eadc617f5289215',
        Type: 'json',
        ATPT_OFCDC_SC_CODE: 'B10',
        SD_SCHUL_CODE: '7010083',
        MLSV_YMD: today
     
        
    },

})
    .done(function (msg) {
        let dish = msg.split("\",\"ORPLC")[0].split("\"DDISH_NM\":\"")[1]; //json 형태의 msg를 보기 좋게 바꾸기
        console.log(dish);
        const regex = /\s*\([^)]*\)/g;
        let dishmod = dish.replace(regex, '').replace(/%/g, '&');;
        document.getElementById('cafe').innerHTML = dishmod;
    });
}



function nextDay(){
    if(currentDayIndex == 5){
        currentDayIndex = 1;
        today = String(Number(today) + 3);
        console.log('금요일');
        console.log(today)
    } else{
        currentDayIndex = currentDayIndex + 1;
        today = String(Number(today) + 1)
    };
    if(Number(today.substring(6, 8)) >= 32
    ){
        alert('해당 달의 급식만 확인 가능합니다.  ')
    }
    let daymod = today.substring(6,8);
    let monthmod = today.substring(4,6);
    
    getMenu()
};
function formerDay(){
    if(currentDayIndex == 1){
        currentDayIndex = 5;
        today = String(Number(today) - 3);
        console.log('월요일');
        console.log(today)
    } else{
        currentDayIndex = currentDayIndex - 1;
        today = String(Number(today) - 1)
    };
    if(Number(today.substring(6, 8)) >= 32
    ){
        alert('해당 달의 급식만 확인 가능합니다.  ')
    }
    let daymod = today.substring(6,8);
    let monthmod = today.substring(4,6);
    
    getMenu()
};

//Button Click Effect
let formerDayButton = document.getElementById('formerDay')
let nextDayButton = document.getElementById('nextDay')

formerDayButton.addEventListener('touchstart', function(){
    console.log('click!');
    this.style.backgroundColor = '#607b00';
});
formerDayButton.addEventListener('touchend', function(){
    this.style.backgroundColor = '#c8ff00';
});

nextDayButton.addEventListener('touchstart', function(){
    this.style.backgroundColor = '#607b00';
});
nextDayButton.addEventListener('touchend', function(){
    this.style.backgroundColor = '#c8ff00';
});




//시간표 가져오기





getMenu()

