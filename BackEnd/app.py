from flask import Flask, render_template, request
from ScheduleMgmt import Schedule

mgmt = Schedule()

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')
    
@app.route('/modSchedule')
def modSchedule():
    position = request.args.get('position') #pos: tuple(DAY:str,TIME:int)
    content = request.args.get('content') #content: str

    mgmt.modContent(position,content)
    return f"Moded Schedule: {position[0],position[1],content}"

@app.route('/getSchedule')
def getSchedule():
    position = request.args.get('position') #pos: tuple(DAY:str,TIME:int)

    content = mgmt.getContent(position)

    return (position,content)

if __name__ == '__main__':
    app.run(debug=True)
    
    
    