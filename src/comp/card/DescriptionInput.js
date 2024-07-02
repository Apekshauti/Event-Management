// components/DescriptionInput.js
import React from "react";

function DescriptionInput({ onChange, value }) {
  return (
    <div className="description-input">
      <textarea
        className="description-textarea"
        placeholder="Enter description here..."
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default DescriptionInput;
