/** @format */

import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Grievance from "../grievance/createGrievance";

import { FETCH_STATUS } from "../../common/contants";
import {
  createIssue,
  resetNewIssue,
} from "../../modules/grievances/actionCreators";
// import { Container } from "./styles";

function GrievanceNew({ actionCreateIssue, actionResetNewIssue }) {
  const issues = useSelector((state) => state.issues);
  const { new: newIssue } = issues;

  const history = useHistory();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([]);
  // const [data, setData] = useState([])

  const onSubmit = async (data) => {
    setTitle(data.title);
    setLocation(data.location);
    setCategory(data.category);
    setDescription(data.description)
    setImages([data.images])
    await actionCreateIssue({
      title,
      location,
      category,
      description,
      images,
    });
  };

  useEffect(() => {
    if (newIssue.status === FETCH_STATUS.success) {
      const newIssueId = newIssue._id;

      actionResetNewIssue();

      history.push(`/grievances/${newIssueId}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newIssue]);

  return <Grievance handleSubmit={(newData) => onSubmit(newData)}/>;

  // return (
  //   <Container>
  //     <div className="card">
  //       <div className="card-body">
  //         <h5 className="card-title">Create A Grievance</h5>
  //         <form onSubmit={onSubmit}>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="title"
  //             placeholder="Title"
  //             value={title}
  //             onChange={(e) => setTitle(e.target.value)}
  //             disabled={newIssue.status === FETCH_STATUS.loading}
  //           />
  //
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="category"
  //             placeholder="Choose Category"
  //             value={category}
  //             onChange={(e) => setCategory(e.target.value)}
  //             disabled={newIssue.status === FETCH_STATUS.loading}
  //           />
  //
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="location"
  //             placeholder="Location"
  //             value={location}
  //             onChange={(e) => setLocation(e.target.value)}
  //             disabled={newIssue.status === FETCH_STATUS.loading}
  //           />
  //
  //           <textarea
  //             id="description"
  //             placeholder="Describe your issue"
  //             rows="4"
  //             value={description}
  //             onChange={(e) => setDescription(e.target.value)}
  //           />
  //
  //           {images.map((url) => (
  //             <img
  //               src={url}
  //               alt="issue detail"
  //               key={url}
  //               style={{
  //                 width: "100px",
  //                 height: "100px",
  //                 margin: "1px",
  //               }}
  //             />
  //           ))}
  //
  //           <p>{newIssue.status}</p>
  //
  //           {newIssue.status === FETCH_STATUS.error ? (
  //             <p>{newIssue.error}</p>
  //           ) : null}
  //
  //           <button
  //             type="reset"
  //             className="btn btn-secondary"
  //             disabled={newIssue.status === FETCH_STATUS.loading}
  //           >
  //             Cancel
  //           </button>
  //
  //           <button
  //             type="submit"
  //             className="btn btn-primary"
  //             disabled={newIssue.status === FETCH_STATUS.loading}
  //           >
  //             Submit
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </Container>
  // );
}

const mapDispatchToProps = {
  actionCreateIssue: createIssue,
  actionResetNewIssue: resetNewIssue,
};

export default connect(null, mapDispatchToProps)(GrievanceNew);
