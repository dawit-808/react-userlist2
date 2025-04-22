import React from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import users from "./assets/data";

function App() {
  return (
    <>
      <div className="container gx-0 user-container">
        <Header />
        {users.map(({ id, name, email, age, paymentStatus }) => {
          const btnClass =
            paymentStatus === "Paid" ? "bg-success" : "bg-danger";
          return (
            <User
              key={id}
              id={id}
              name={name}
              email={email}
              age={age}
              paymentStatus={paymentStatus}
              btnClass={btnClass}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
