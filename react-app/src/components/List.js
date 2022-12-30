import * as React from "react";
import { useSetRecoilState } from "recoil";
import { indexAtom } from "../atom/atom";
import DeleteModal from "./modals/DeleteModal";
import UpdateModal from "./modals/UpdateModal";

const List = () => {
  const [list, setList] = React.useState(
    JSON.parse(localStorage.getItem("eventList"))
  );
  const setIndex = useSetRecoilState(indexAtom);

  return (
    <div className="container">
      <h1>List of events</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">date</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {list.map((event, i) => (
            <tr>
              <th scope="row">{i + 1}</th>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  onClick={(e) => setIndex(i)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#updateModal"
                  onClick={(e) => setIndex(i)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UpdateModal />
      <DeleteModal />
    </div>
  );
};

export default List;
