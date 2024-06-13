const FINAL_FIRST = new Date('2024-06-27');
const MIDTERM_SECOND = new Date('2024-09-15');
const FINAL_SECOND = new Date('2024-11-15');

const TEST_9 = new Date('2024-09-04');
const TEST_10 = new Date('2024-10-15');


function getDday(date){
    var today = new Date();


    
    
    dist = date - today;

    dist_date = Math.floor(dist / (1000 * 60 * 60 * 24));
    

    return dist_date*-1;
    
}


function switchSchoolTest(){
    var today = new Date();

    const SchoolTest = [FINAL_FIRST,MIDTERM_SECOND,FINAL_SECOND];

    const gap = SchoolTest.map((date) => {
        if (today < date) {
            const dist = getDday(date);
            return dist;

        } else if (today > date){

            return;

        } else {
            const dist = 'Day'
            return dist;

        }

    });

    return Math.max(...gap);

}

function switchMonthTest(){
    var today = new Date();

    const SchoolTest = [TEST_9,TEST_10];

    const gap = SchoolTest.map((date) => {
        if (today < date) {
            const dist = getDday(date);
            return dist;

        } else if (today > date){

            return;

        } else {
            const dist = 'Day'
            return dist;

        }

    });

    return Math.max(...gap);

}

document.getElementById('naContent').innerHTML = ('D'+switchSchoolTest());

document.getElementById('moContent').innerHTML = ('D'+switchMonthTest());
