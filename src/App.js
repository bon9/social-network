import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App({ state, dispatch, changeTextareaValue }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile profilePage={state.profilePage} dispatch={dispatch} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
