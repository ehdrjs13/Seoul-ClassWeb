// function getMenu(){
//     $.ajax({
//     method: "GET",
//     url: "https://open.neis.go.kr/hub/mealServiceDietInfo",
//     data: {
//         KEY: 'd063062b50b8496a8eadc617f5289215',
//         Type: 'json',
//         ATPT_OFCDC_SC_CODE: 'B10',
//         SD_SCHUL_CODE: '7010083',
//         MLSV_YMD: today,
        
//     },

// })
//     .done(function (msg) {
//         let dish = msg.split("\",\"ORPLC")[0].split("\"DDISH_NM\":\"")[1]; //json 형태의 msg를 보기 좋게 바꾸기
//         console.log(msg);
//         console.log(dish);
//         const regex = /\s*\([^)]*\)/g;
//         let dishmod = dish.replace(regex, '').replace(/%/g, '&');;
//         document.getElementById('cafe').innerHTML = dishmod;
//     });
// }