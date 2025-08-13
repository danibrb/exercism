import datetime
def add(moment):
    time_change = datetime.timedelta(seconds=1e9) 
    new_moment = moment + time_change
    return new_moment
    
