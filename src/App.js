import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/dialogs"
                        component={DialogsContainer}
                        // render={() => <DialogsContainer />}
                    />
                    <Route
                        path="/profile"
                        component={ProfileContainer}
                        // render={() => <Profile />}
                    />
                    <Route path="/users" component={UsersContainer} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
