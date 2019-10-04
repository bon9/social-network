import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
<<<<<<< HEAD
import StoreContext from "./StoreContext";

function renderEntireTree() {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById("root")
    );
=======

function renderEntireTree(state) {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
>>>>>>> 3da99c14f488743b78a66defa12573e7f7043707
}

// для первого рендера
renderEntireTree();

store.subscribe(() => renderEntireTree(store.getState()));
