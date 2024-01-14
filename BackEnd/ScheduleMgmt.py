import sqlite3

class Schedule():
    def __init__(self) -> None:
        #기본 시간표 초기화 설정
        default_schedule = [
            ('MON', 1, '국어'),
            ('MON', 2, '국어'),
            ('MON', 3, '창체'),
            ('MON', 4, '창체'),
            ('MON', 5, '창체'),
            ('MON', 6, '창체'),
            ('MON', 7, '창체'),
            ('MON', 1, '창체'),
            ('MON', 2, '창체'),
            ('MON', 3, '창체'),
            ('MON', 4, '창체'),
            ('MON', 5, '창체'),
            ('MON', 6, '창체'),
            ('MON', 7, '창체'),

            ('THU', 1, '창체'),
            ('THU', 2, '창체'),
            ('THU', 3, '창체'),
            ('THU', 4, '창체'),
            ('THU', 5, '창체'),
            ('THU', 6, '창체'),
            ('THU', 7, '창체'),

            ('WED', 1, '창체'),
            ('WED', 2, '창체'),
            ('WED', 3, '창체'),
            ('WED', 4, '창체'),
            ('WED', 5, '창체'),
            ('WED', 6, '창체'),
            ('WED', 7, '창체'),

            ('THU', 1, '창체'),
            ('THU', 2, '창체'),
            ('THU', 3, '창체'),
            ('THU', 4, '창체'),
            ('THU', 5, '창체'),
            ('THU', 6, '창체'),
            ('THU', 7, '창체'),

            ('FRI', 1, '창체'),
            ('FRI', 2, '창체'),
            ('FRI', 3, '창체'),
            ('FRI', 4, '창체'),
            ('FRI', 5, '창체'),
            ('FRI', 6, '창체'),
            ('FRI', 7, '창체'),
        ]

        self.con = sqlite3.connect('./schedule.db')
        self.cur = self.con.cursor()
        self.cur.execute("CREATE TABLE IF NOT EXISTS Schedule(DAY text, TIME number, Content text, Detail text)")
        self.cur.executemany("INSERT INTO Schedule (DAY, TIME, Content) VALUES(?,?,?)", default_schedule) #

        self.con.commit()
        return None

    def modContent(self, pos, content) -> None:
        self.cur.execute("UPDATE Schedule SET Content = %s WHERE DAY = %s AND TIME = %d" % content, (pos[0], pos[1]))
        
        self.con.commit()
        # self.con.close() 구조가 맞는지 모르겠다.. 테스트해보기
        return None
    
    def getContent(self,pos) -> tuple: 
        self.cur.execute("SELECT Content, Detail FROM Schedule WHERE DAY = %s AND TIME = %s" % (pos[0], pos[1]))

        return self.cur