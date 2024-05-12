class ScheduleMgmt {
    constructor(){
        const sqlite3 = require('sqlite3').verbose();
        this.db = new sqlite3.Database('Schedule.db');

        const default_schedule =  [
            {day:'mon',time:1,content:'문학A'},
            {day:'mon',time:2,content:'정보과학'},
            {day:'mon',time:3,content:'수학'},
            {day:'mon',time:4,content:'진로'},
            {day:'mon',time:5,content:'운동'},
            {day:'mon',time:6,content:'영어B'},
            {day:'mon',time:7,content:'-'},

            {day:'thu',time:1,content:'수학'},
            {day:'thu',time:2,content:'운동'},
            {day:'thu',time:3,content:'문학B'},
            {day:'thu',time:4,content:'외국어'},
            {day:'thu',time:5,content:'음악'},
            {day:'thu',time:6,content:'물리학A'},
            {day:'thu',time:7,content:'생명과학A'},

            {day:'wed',time:1,content:'문학A'},
            {day:'wed',time:2,content:'영어A'},
            {day:'wed',time:3,content:'수학'},
            {day:'wed',time:4,content:'지구과학A'},
            {day:'wed',time:5,content:'화학B'},
            {day:'wed',time:6,content:'물리학B'},
            {day:'wed',time:7,content:'-'},

            {day:'thur',time:1,content:'영어B'},
            {day:'thur',time:2,content:'문학B'},
            {day:'thur',time:3,content:'기하'},
            {day:'thur',time:4,content:'생명과학B'},
            {day:'thur',time:5,content:'화학A'},
            {day:'thur',time:6,content:'과학교양'},
            {day:'thur',time:7,content:'-'},

            {day:'fri',time:1,content:'수학'},
            {day:'fri',time:2,content:'외국어'},
            {day:'fri',time:3,content:'기하'},
            {day:'fri',time:4,content:'지구과학B'},
            {day:'fri',time:5,content:'영어A'},
            {day:'fri',time:6,content:'창체'},
            {day:'fri',time:7,content:'창체'}
        ];

        this.db.serialize(() => {
            this.db.run("DROP TABLE IF EXISTS Schedule",() => {
                this.db.run("CREATE TABLE IF NOT EXISTS Schedule(DAY TEXT, TIME INTEGER, Content TEXT, Detail TEXT)", (err) => {
                    if (err) {
                        console.error('Error creating Schedule table:', err.message);
                    } else {
                        const insertquery = 'INSERT INTO Schedule (DAY, TIME, Content, Detail) VALUES (?, ?, ?, ?)';
                        default_schedule.forEach(schedule => {
                            this.db.run(insertquery, [schedule.day, schedule.time, schedule.content, null]);
                        });
                        console.log('Successfully Inserted Default Data.');
                    }
                });
            }
            );
        });
    }

    getSchedule(day, time, callback){
  

        this.db.all("SELECT Content, Detail FROM Schedule WHERE DAY = ? AND TIME = ? ", day, time, (err, rows) => {
            if (err){
                console.log('ERROR',err);
                callback(err);
            } else {

                callback(rows);
            }
        });
    }


    modSchedule(day, time, content, callback) {

        
        this.db.run("UPDATE Schedule SET Content = ? WHERE DAY = ?  AND TIME = ?", content, day, time, (err) => {
            if (err) {
                callback(err, null);
            } else {

                this.getSchedule(day, time, (rows) => {
                    callback(rows);
                });
            }
        });
    }

    getAllSchedule(day, callback){
  

        this.db.all("SELECT DAY, TIME, Content, Detail FROM Schedule WHERE DAY = ? ", day, (err, rows) => {
            if (err){
                console.log('ERROR',err);
                callback(err);
            } else {

                callback(rows);
            }
        });
    }

}



module.exports = ScheduleMgmt;



// //Test Sequence

// const scheduleMgmt = new ScheduleMgmt();

// setTimeout(function() {
//     scheduleMgmt.getAllSchedule('mon', (res) => {
//         console.log(res)

//     })

            
//         }, 100);


    
// }, 100);



