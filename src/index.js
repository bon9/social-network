import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import StoreContext from "./StoreContext";

function renderEntireTree() {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <App />
        </StoreContext.Provider>,
        document.getElementById("root")
    );
}

// для первого рендера
renderEntireTree();

store.subscribe(() => renderEntireTree(store.getState()));
