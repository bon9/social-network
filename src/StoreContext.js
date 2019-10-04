import React from "react";

const StoreContext = React.createContext(null);

const Provider = ({ value, children }) => {
    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};

export default StoreContext;
