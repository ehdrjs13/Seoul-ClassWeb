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
today = `${year}${month}${day}`;



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

function modMenu(){
    $.ajax({
    method: "GET",
    url: "https://open.neis.go.kr/hub/mealServiceDietInfo",
    data: {
        KEY: 'd063062b50b8496a8eadc617f5289215',
        Type: 'json',
        ATPT_OFCDC_SC_CODE: 'B10',
        SD_SCHUL_CODE: '7010083',
        MLSV_YMD: today,
        
    },

})
    .done(function (msg) {
        let dish = msg.split("\",\"ORPLC")[0].split("\"DDISH_NM\":\"")[1]; //json 형태의 msg를 보기 좋게 바꾸기
        console.log(msg);
        console.log(dish);
        const regex = /\s*\([^)]*\)/g;
        let dishmod = dish.replace(regex, '').replace(/%/g, '&');;
        document.getElementById('cafe').innerHTML = dishmod;
        document.getElementById('todaymenus').innerHTML = (monthmod.replace('0', '')+'월'+daymod.replace(/(^0+)/, "")+'일 급식')
    });
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
        MLSV_YMD: today,
        
    },

})
    .done(function (msg) {
        let dish = msg.split("\",\"ORPLC")[0].split("\"DDISH_NM\":\"")[1]; //json 형태의 msg를 보기 좋게 바꾸기
        console.log(msg);
        console.log(dish);
        const regex = /\s*\([^)]*\)/g;
        let dishmod = dish.replace(regex, '').replace(/%/g, '&');;
        document.getElementById('cafe').innerHTML = dishmod;
    });
}

function getSchedule(){
    $.ajax({
        method: "GET",
        url: "https://shs-menu.run.goorm.io/schedule/",
        })
    .done(function (msg) {
        
        let fulldata = JSON.parse(msg);
        
        //요일별로 각 교시별 과목 지정
        let first = fulldata.table.rows[1].c[currentDayIndex].v;
        let second = fulldata.table.rows[2].c[currentDayIndex].v;
        let third = fulldata.table.rows[3].c[currentDayIndex].v;
        let forth = fulldata.table.rows[4].c[currentDayIndex].v;
        let fiveth = fulldata.table.rows[5].c[currentDayIndex].v;
        let sixth = fulldata.table.rows[6].c[currentDayIndex].v;
        let seventh = fulldata.table.rows[7].c[currentDayIndex].v;
        
        //각 교시 과목들 콘솔로 확인
        console.log('과목:', first, second, third, forth, fiveth, sixth, seventh);

        //apply
        document.getElementById('1st').innerHTML = first;
        document.getElementById('2nd').innerHTML = second;
        document.getElementById('3rd').innerHTML = third;
        document.getElementById('4th').innerHTML = forth;
        document.getElementById('5th').innerHTML = fiveth;
        document.getElementById('6th').innerHTML = sixth;
        document.getElementById('7th').innerHTML = seventh;
    });
}


//날짜 전환 코드
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
    
    modMenu()
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
    
    modMenu()
};




//요일과 날짜 문자형태로 확인
console.log('요일:', currentDayIndex);
console.log('날짜:', today); 



getMenu()
getSchedule()




// //급식 데이터 가져오기(4세대 나이스 오류 발생시 전용 Spreadsheets와 연동해서 사용)
// $.ajax({
//     method: "GET",
//     url: "https://shs-menu.run.goorm.io/menu/",
//     })
// .done(function (msg) {
//     console.log('success');
//     console.log(msg);
//     let fulldata =  JSON.parse(msg);

//     // console.log(fulldata);

//     let menuIndex = Number(today) - 20230821
//     console.log(menuIndex);

//     let index1 = parseInt(menuIndex / 7);
//     let index2 = menuIndex % 7;
    
//     console.log(index1, index2, 'index 지정')
    
//     let todayMenu = fulldata.table.rows[index1].c[index2].v.trim();

//     const todayMenuMod_List = todayMenu.split(', ');

//     console.log(todayMenuMod_List);

//     const todayMenuMod = todayMenuMod_List.join("\n");
    
//     console.log(todayMenuMod);

//     document.getElementById('cafe').innerHTML = todayMenuMod_List.join('<br>');

// });

//알림 관련: Push API 관련 어려움으로 일단을 드랍

// Notification.requestPermission();
// if(currnentHour === 23 && currentMinute === 20 && currentSecond === 0){
//     new Notification("서울고 1학년 8반 알림", {body:'내일의 시간표와 급식을 확인해보세요.'});
// }
// new Notification("타이틀", {body:'메세지 내용'});




