import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="category">Search by category:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user"
          list="users"
          type="text"
          className="form-control"
          placeholder="Search by first name"
          id="category"
        />
        <button type="submit" onClick={props.handleFormAlpha} className="btn btn-danger">
          Sort Alphabetically
        </button>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
