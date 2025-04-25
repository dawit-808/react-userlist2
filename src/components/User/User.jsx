import React from "react";
import "./User.css";

const User = (props) => {
  const {
    order,
    id,
    name,
    trainingType,
    trainingDay,
    trainingSchedule,
    paymentStatus,
    btnClass,
  } = props;
  return (
    <>
      <div className="user-row">
        <div>{order}</div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{trainingType}</div>
        <div>{trainingDay}</div>
        <div>{trainingSchedule}</div>
        <div>
          <span className={`payment ${btnClass}`}>{paymentStatus}</span>
        </div>
        <div className="action-icons">
          <i className="bi bi-pencil-square" title="Edit"></i>
          <i className="bi bi-trash" title="Delete"></i>
        </div>
      </div>
    </>
  );
};

export default User;
