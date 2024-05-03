

const ScheduleMgmt = require('./scheduleMgmt.js');

const cors = require('cors');



const database = new ScheduleMgmt();

const express = require("express");

const app = express();

app.use(cors())

const port = 220;

app.listen(port,( )=>{
    console.log('Server Inited. ');
});

app.get("/",(req, res)=>{
    res.json("Seoul-High ClassWeb Project");
});

app.get("/getSchedule", (req,res)=>{
    q = req.query;
    day = q.day;
    time = q.time;

    console.log('REQUEST::',day,time);


    
    setTimeout(function (){
        database.getSchedule(day,time,(content) => {
            console.log('res:',content);
            res.json({'day':day,'time':time,'content':content,'status':'getSchedule'});


        })

    },100);

    console.log('GET Success')

});

app.get("/modSchedule", (req,res) => {
    q = req.query

    day = q.day;
    time = q.time;


    content = q.content;

    //constructor 응답 기다리기
    setTimeout(function (){
        database.modSchedule(day,time,content,(content) => {
            console.log('POST')
            res.json({'day':day,'time':time,'content':content,'status':'modSchedule'});
            

        })

    },100)  


    

});

//-------------------------------------------------------
app.get("/getAllSchedule", (req,res)=>{
    q = req.query;
    day = q.day;




    
    setTimeout(function (){
        database.getAllSchedule(day,(content) => {
            console.log('res:',content);
            res.json({'day':day,'content':content,'status':'getAllSchedule'});


        })

    },100);

    console.log('GET-All Success')

});
