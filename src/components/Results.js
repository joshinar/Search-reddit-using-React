import React from "react";

const Results = props => {
  const truncate = (text, limit) => {
    const searchText = text.indexOf("", limit);
    return text.substring(0, searchText);
  };
  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{truncate(`${props.body}`, 100)}</p>
          <a href={props.goTo} target="_blank" className="btn btn-danger">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;
