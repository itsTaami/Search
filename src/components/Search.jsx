import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Search({ handleChange }) {
  return (
    <>
      <input
        className="mb-4"
        type="Search"
        placeholder="Haih..."
        onChange={handleChange}
      />
    </>
  );
}

export default Search;
