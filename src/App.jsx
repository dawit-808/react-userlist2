import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import users from "./assets/data";

const App = () => {
  return (
    <>
      <div className="container gx-0 user-container">
        <Header />
        {users.map(
          (
            {
              id,
              name,
              trainingType,
              trainingDay,
              trainingSchedule,
              paymentStatus,
            },
            i
          ) => {
            const btnClass = paymentStatus === "Paid" ? "green" : "red";
            return (
              <User
                key={id}
                order={i + 1}
                id={id}
                name={name}
                trainingType={trainingType}
                trainingDay={trainingDay}
                trainingSchedule={trainingSchedule}
                paymentStatus={paymentStatus}
                btnClass={btnClass}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default App;
