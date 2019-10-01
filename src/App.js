import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App({ postData, dialogsData, messagesData }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile postData={postData} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
