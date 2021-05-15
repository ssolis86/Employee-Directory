import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key ={result.name.first + result.name.last} className="list-group-item">
          <img alt="headshot" src={result.picture.large} className="img-fluid" />
          {result.name.first} {result.name.last}
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
