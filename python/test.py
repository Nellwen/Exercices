import datetime
import random

from storage.DatetimeEventStore import DatetimeEventStore

store = DatetimeEventStore()

start_ts = datetime.datetime(2000, 1, 1).timestamp()
end_ts = datetime.datetime(2020, 1, 1).timestamp()

for i in range(10000):
    dt = datetime.datetime.fromtimestamp(random.randint(start_ts, end_ts))
    store.store_event(at=dt, data="Event number %d." % i)

start_date = datetime.datetime(year=2018, month=1, day=1)
end_date = datetime.datetime(year=2018, month=2, day=1)
for event in store.get_events(start = start_date, end=end_date):
    print(event)