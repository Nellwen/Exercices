import * as React from "react"
import { useRecoilValue } from "recoil"
import { indexAtom } from "../../atom/atom"

const DeleteModal = (props) => {
    const index = useRecoilValue(indexAtom)
    const deleteEvent = () => {
        const eventList = JSON.parse(localStorage.getItem("eventList"))
        eventList.splice(index, 1)
        localStorage.setItem("eventList", JSON.stringify(eventList))
        document.location.reload()
    }

    return(
        <div className="modal" tabIndex="-1" id="deleteModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Delete Event N°{index + 1}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <p>Do you want delete Event n°{index + 1} ?</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-danger" onClick={e => deleteEvent()}>Delete</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default DeleteModal