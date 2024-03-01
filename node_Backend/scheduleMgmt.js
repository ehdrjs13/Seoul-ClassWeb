class ScheduleMgmt {
    constructor(){
        const sqlite3 = require('sqlite3').verbose();
        this.db = new sqlite3.Database('Schedule.db');

        const default_schedule =  [
            {day:'mon',time:1,content:'국어'},
            {day:'mon',time:2,content:'국어'},
            {day:'mon',time:3,content:'국어'},
            {day:'mon',time:4,content:'국어'},
            {day:'mon',time:5,content:'국어'},
            {day:'mon',time:6,content:'국어'},
            {day:'mon',time:7,content:'국어'},

            {day:'thu',time:1,content:'국어'},
            {day:'thu',time:2,content:'국어'},
            {day:'thu',time:3,content:'국어'},
            {day:'thu',time:4,content:'국어'},
            {day:'thu',time:5,content:'국어'},
            {day:'thu',time:6,content:'국어'},
            {day:'thu',time:7,content:'국어'},

            {day:'wed',time:1,content:'국어'},
            {day:'wed',time:2,content:'국어'},
            {day:'wed',time:3,content:'국어'},
            {day:'wed',time:4,content:'국어'},
            {day:'wed',time:5,content:'국어'},
            {day:'wed',time:6,content:'국어'},
            {day:'wed',time:7,content:'국어'},

            {day:'thur',time:1,content:'국어'},
            {day:'thur',time:2,content:'국어'},
            {day:'thur',time:3,content:'국어'},
            {day:'thur',time:4,content:'국어'},
            {day:'thur',time:5,content:'국어'},
            {day:'thur',time:6,content:'국어'},
            {day:'thur',time:7,content:'국어'},

            {day:'fri',time:1,content:'국어'},
            {day:'fri',time:2,content:'국어'},
            {day:'fri',time:3,content:'국어'},
            {day:'fri',time:4,content:'국어'},
            {day:'fri',time:5,content:'국어'},
            {day:'fri',time:6,content:'국어'},
            {day:'fri',time:7,content:'국어'}
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

}



module.exports = ScheduleMgmt;



// //테스트 시퀀스

// const scheduleMgmt = new ScheduleMgmt();

// setTimeout(function() {
//     scheduleMgmt.modSchedule('mon', 1, '화학1',(err, data) => {
//         setTimeout(function() {
//             scheduleMgmt.getSchedule('mon', 1, (data) => {
//                 console.log('DATA:',data);
//         });
            
//         }, 30);

// });
    
// }, 100);



