import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App({ store }) {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/profile" render={() => <Profile />} />
                </div>
            </div>
        </BrowserRouter>
    );
=======
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <DialogsContainer store={store} />}
          />
          <Route path="/profile" render={() => <Profile store={store} />} />
        </div>
      </div>
    </BrowserRouter>
  );
>>>>>>> 3da99c14f488743b78a66defa12573e7f7043707
}

export default App;
