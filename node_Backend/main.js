

const ScheduleMgmt = require('./ScheduleMgmt');

const database = new ScheduleMgmt();

const express = require("express");

const app = express();

const port = 200;

app.listen(port,( )=>{
    console.log('Server Initialized. ');
});

app.get("/",(req, res)=>{
    res.json("Seoul-High ClassWeb Project");
});

app.get("/getSchedule", (req,res)=>{
    q = req.query;
    day = q.day;
    time = q.time;


    
    setTimeout(function (){
        database.getSchedule(day,time,(content) => {
            console.log('res:',content);
            res.json({'day':day,'time':time,'content':content,'status':'getSchedule'});


        })

    },100);

    console.log('GET Success')



    // res.json({'day':day,'time':time,'content':content,'status':'getSchedule'});
});

//가능하면 REST POST로 공부해서 설계를 변경해보자. 
app.get("/modSchedule", (req,res) => {
    q = req.query

    day = q.day;
    time = q.time;
    content = q.content;

    console.log(1)
    //constructor 응답 기다리기
    setTimeout(function (){
        database.modSchedule(day,time,content,(content) => {
            console.log('POST')
            res.json({'day':day,'time':time,'content':content,'status':'getSchedule'});


        })

    },100)  

    console.log('Post Success')

    


    // res.json({'day':day,'time':time,'status':'modSchedule'})

});
