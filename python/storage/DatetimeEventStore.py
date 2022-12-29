from storage.Event import Event

class DatetimeEventStore:
    def __init__(self):
        self.storage = []

    # store an event with a datetime
    def store_event(self, at, data):
        self.storage.append(Event(data, at))
        print("Event Successfully add to the store!")
    
    # show all events associated with a period
    def get_events(self, start, end):
        events = []
        for event in self.storage:
            if event.datetime > start and event.datetime < end:
                events.append(str(event.name) + ": " + str(event.datetime))
        return events
