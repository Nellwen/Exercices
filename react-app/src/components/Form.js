import * as React from "react";

const Form = () => {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Add event in localstorage
  const addEvent = () => {
    if (name === "" || date === "") {
      setMessage("The fields must not be empty");
    } else {
      const eventList = JSON.parse(localStorage.getItem("eventList"));
      if (eventList === null)
        localStorage.setItem("eventList", JSON.stringify([{ name, date }]));
      else {
        eventList.push({ name, date });
        localStorage.setItem("eventList", JSON.stringify(eventList));
      }
      setDate("");
      setName("");
      setMessage("Event add with success!");
    }
  };
  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Add an Event</h5>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Event Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="name" className="">
                  Event Name
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Start date
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                id="liveToastBtn"
                onClick={(e) => addEvent()}
              >
                Add Event
              </button>
            </form>
            {message !== "" && <p className="mt-2"> {message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
