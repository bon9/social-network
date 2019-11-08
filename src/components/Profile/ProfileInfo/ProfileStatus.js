import React, { useState, useEffect } from "react";

function ProfileStatus({ status: statusFromProp, updateStatus }) {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(statusFromProp);

  useEffect(() => {
    setStatus(statusFromProp);
  }, [statusFromProp]);

  const toggleStateEditMode = () => {
    if (editMode) {
      updateStatus(status);
    }
    setEditMode(!editMode);
  };

  const handleChangeValue = e => {
    setStatus(e.target.value);
  };

  return (
    <>
      {editMode ? (
        <div>
          <input
            autoFocus
            onBlur={toggleStateEditMode}
            value={status}
            onChange={handleChangeValue}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={toggleStateEditMode}>
            {status || "no status"}
          </span>
        </div>
      )}
    </>
  );
}

export default ProfileStatus;
