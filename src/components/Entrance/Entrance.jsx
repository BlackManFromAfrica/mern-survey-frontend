import React from "react";
import "./Entrance.scss";
import { Route, Routes } from "react-router-dom";
import EntranceForm from "./EntranceForm";
const Entrance = () => {
  return (
    <div className="wrapper" style={{marginTop: 100}}>
      <div class="container" id="container">
        <Routes>
          <Route
            path="/"
            element={
              <EntranceForm
                text="Sign Up"
                textrev="Sign In"
                link="/login"
                descr="If you are already registered, you can login"
              />
            }
          />
          <Route
            path="/login"
            element={
              <EntranceForm
                text="Sign In"
                textrev="Sign Up"
                link="/"
                descr="Start creating polls!"
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Entrance;
