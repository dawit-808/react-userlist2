import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import User from "./components/User/User";
import users from "./assets/data";

function App() {
  return (
    <>
      <div className="container gx-0 user-container">
        <Header />
        {users.map(
          ({ id, name, trainingType, trainingSchedule, paymentStatus }, i) => {
            const btnClass =
              paymentStatus === "Paid" ? "bg-success" : "bg-danger";
            return (
              <User
                key={id}
                order={i + 1}
                id={id}
                name={name}
                trainingType={trainingType}
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
}

export default App;
