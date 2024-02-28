//From Legacy Code

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
    if(Number(today.substring(6, 8)) >= 32
    ){
        alert('해당 달의 급식만 확인 가능합니다.  ')
        return;
    }

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
        return;
    }
    let daymod = today.substring(6,8);
    let monthmod = today.substring(4,6);

    console.log('NEXTDAY:', daymod,monthmod);


    
    getMenu()

    document.getElementById('menuTitle').innerHTML = 
    (monthmod.replace('0', '')+'월'+daymod.replace(/(^0+)/, "")+'일 급식')
};
function formerDay(){
    if(Number(today.substring(6, 8)) <= 0){
        alert('해당 달의 급식만 확인 가능합니다.  ')
        return;
    }

    if(currentDayIndex == 1){
        currentDayIndex = 5;
        today = String(Number(today) - 3);
        console.log('월요일');
        console.log(today)
    } else{
        currentDayIndex = currentDayIndex - 1;
        today = String(Number(today) - 1)
    };
    if(Number(today.substring(6, 8)) <= 0){
        alert('해당 달의 급식만 확인 가능합니다.  ')
        return;
    }

    console.log('변경:', today);
    let daymod = today.substring(6,8);
    let monthmod = today.substring(4,6);

    console.log('FORMERDAY:', daymod,monthmod);
    
    getMenu()

    document.getElementById('menuTitle').innerHTML = 
    (monthmod.replace('0', '')+'월'+daymod.replace(/(^0+)/, "")+'일 급식')
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


function getWeather(){
};









//Main Init:
getMenu();