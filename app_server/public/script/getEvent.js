function getEvent(date){
    fetch(`https://open.neis.go.kr/hub/SchoolSchedule?KEY=b505ba04b8a745f3b626fc4bca444142&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010083&AA_YMD=${date}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data)
        console.log('success');

        // console.log('original:',data)
        // console.log('eeeeeee:',data.SchoolSchedule)

        var requiredData = returnData(data);

        console.log(requiredData);
        
        var eventDataString = requiredData.join('<br>');

        console.log(eventDataString);

        document.getElementById('eventList').innerHTML = eventDataString;
        })
}

function returnData(data) {
    const events = [];

    data.SchoolSchedule.forEach(data => {

        if (data.row) {

        data.row.forEach(row => {

            if (row.TW_GRADE_EVENT_YN === "Y") {
            events.push(row.EVENT_NM);
            }
        });
        }
    });
    
    return events;
}

console.log(getEvent(20240502));
    





// const Data = [
//     {
//         "head": [
//             {
//                 "list_total_count": 2
//             },
//             {
//                 "RESULT": {
//                     "CODE": "INFO-000",
//                     "MESSAGE": "정상 처리되었습니다."
//                 }
//             }
//         ]
//     },
//     {
//         "row": [
//             {
//                 "ATPT_OFCDC_SC_CODE": "B10",
//                 "SD_SCHUL_CODE": "7010083",
//                 "AY": "2024",
//                 "AA_YMD": "20240502",
//                 "ATPT_OFCDC_SC_NM": "서울특별시교육청",
//                 "SCHUL_NM": "서울고등학교",
//                 "DGHT_CRSE_SC_NM": "주간",
//                 "SCHUL_CRSE_SC_NM": "고등학교",
//                 "EVENT_NM": "전교생 봉사활동",
//                 "EVENT_CNTNT": "",
//                 "ONE_GRADE_EVENT_YN": "Y",
//                 "TW_GRADE_EVENT_YN": "Y",
//                 "THREE_GRADE_EVENT_YN": "Y",
//                 "FR_GRADE_EVENT_YN": "*",
//                 "FIV_GRADE_EVENT_YN": "*",
//                 "SIX_GRADE_EVENT_YN": "*",
//                 "SBTR_DD_SC_NM": "해당없음",
//                 "LOAD_DTM": "20240502"
//             },
//             {
//                 "ATPT_OFCDC_SC_CODE": "B10",
//                 "SD_SCHUL_CODE": "7010083",
//                 "AY": "2024",
//                 "AA_YMD": "20240502",
//                 "ATPT_OFCDC_SC_NM": "서울특별시교육청",
//                 "SCHUL_NM": "서울고등학교",
//                 "DGHT_CRSE_SC_NM": "주간",
//                 "SCHUL_CRSE_SC_NM": "고등학교",
//                 "EVENT_NM": "사제동행 산행",
//                 "EVENT_CNTNT": "",
//                 "ONE_GRADE_EVENT_YN": "Y",
//                 "TW_GRADE_EVENT_YN": "Y",
//                 "THREE_GRADE_EVENT_YN": "Y",
//                 "FR_GRADE_EVENT_YN": "*",
//                 "FIV_GRADE_EVENT_YN": "*",
//                 "SIX_GRADE_EVENT_YN": "*",
//                 "SBTR_DD_SC_NM": "해당없음",
//                 "LOAD_DTM": "20240502"
//             }
//         ]
//     }
// ];