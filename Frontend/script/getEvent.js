function getEvent(date){
        fetch(`https://open.neis.go.kr/hub/SchoolSchedule?KEY=b505ba04b8a745f3b626fc4bca444142&Type=json&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7010083&AA_YMD=${date}`)
        .then(response => {
            console.log(response);
            return response.json
        })
}