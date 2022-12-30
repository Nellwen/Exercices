import * as React from "react"
import { useRecoilValue } from "recoil"
import { indexAtom } from "../../atom/atom"

const UpdateModal = (props) => {
    const [name, setName] = React.useState("")
    const [date, setDate] = React.useState("")
    const index = useRecoilValue(indexAtom)
    
    React.useEffect(() => {
        console.log(index)
        const eventList = JSON.parse(localStorage.getItem("eventList"))
        setName(eventList[index].name)
        setDate(eventList[index].date)
    }, [index])

    const update = () => {
        const eventList = JSON.parse(localStorage.getItem("eventList"))
        eventList[index] = {name, date}
        localStorage.setItem("eventList", JSON.stringify(eventList))
        document.location.reload()
    }

    return(
        <div className="modal" tabIndex="-1" id="updateModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Update Event N°{index + 1}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Event Name"
              value={name}
              onChange = {e => setName(e.target.value)}
            />
            <label htmlFor="name" className="">
              Event Name
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Start date
            </label>
            <input type="datetime-local" className="form-control" id="date" value={date} onChange={e => setDate(e.target.value)}/>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={e => update()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default UpdateModal

