import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App({ state, addPost }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile state={state.profilePage} addPost={addPost} />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
