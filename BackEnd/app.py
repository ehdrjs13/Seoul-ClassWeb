from flask import Flask, render_template, request
from ScheduleMgmt import Schedule
from ast import literal_eval

mgmt = Schedule()

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

######### Data Call & Fetch Guide
#MODSCHEDULE: /modSchedule?position=('MON',2)&content=('str')
#GETSCHEDULE: /getSchedule?position=('MON',2)
@app.route('/modSchedule')
def modSchedule():
    position = literal_eval(request.args.get('position')) #pos: tuple(DAY:str,TIME:int)
    content = request.args.get('content') #content: str

    mgmt.modContent(position,content)
    return f"Moded Schedule: content"
#안정화 됐으니 수정해봅시다

@app.route('/getSchedule')
def getSchedule():
    position = literal_eval(request.args.get('position')) #pos: tuple(DAY:str,TIME:int)

    content = str(mgmt.getContent(position))

    return content

if __name__ == '__main__':
    app.run(debug=True)
    
    
    