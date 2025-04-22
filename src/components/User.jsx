import React from "react";

function User(props) {
  const { id, name, email, age, paymentStatus, btnClass } = props;
  return (
    <>
      <div className="user-row">
        <div>{id}</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{age}</div>
        <div>
          <span className={`badge ${btnClass} badge-role`}>
            {paymentStatus}
          </span>
        </div>
        <div className="action-icons">
          <i className="bi bi-pencil-square" title="Edit"></i>
          <i className="bi bi-trash" title="Delete"></i>
        </div>
      </div>
    </>
  );
}

export default User;
