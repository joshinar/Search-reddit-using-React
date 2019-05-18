import React, { Component } from "react";
import Results from "./Results";

export default class SearchForm extends Component {
  state = {
    searchTerm: "",
    data: [],
    limit: "",
    isLoaded: false,
    sortBy: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onRadioChange = e => {
    this.setState({
      sortBy: e.target.value
    });
  };
  onSubmit = async e => {
    e.preventDefault();
    let getSearch = await fetch(
      `http://www.reddit.com/search.json?q=${this.state.searchTerm}&limit=${
        this.state.limit
      }&sortby=${this.state.sortBy}`
    );

    let response = await getSearch.json();
    this.setState({
      isLoaded: true,
      data: response.data.children.map(data => data.data)
    });

    console.log(this.state.data);
  };
  render() {
    return (
      <div className="container">
        <div className="card card-body mt-3">
          <form onSubmit={this.onSubmit}>
            <h4 className="mb-2">Search Reddit</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for any topic here..."
                name="searchTerm"
                value={this.state.searchTerm}
                onChange={this.onChange}
              />
            </div>
            <div className="form-check form-check-inline">
              Sort By:
              <input
                type="radio"
                name="sortBy"
                id=""
                className="form-check-input ml-2"
                value="latest"
                onChange={this.onRadioChange}
              />
              <label htmlFor="" className="form-check-label">
                Latest
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="sortBy"
                id=""
                className="form-check-input"
                onChange={this.onRadioChange}
                value="relevance"
              />
              <label htmlFor="" className="form-check-label">
                Relevance
              </label>
            </div>

            <h5 className="mt-3">Limit:</h5>
            <div className="form-group">
              <select
                name="limit"
                id=""
                className="form-control"
                onChange={this.onChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25" selected>
                  25
                </option>
              </select>
            </div>
            <input
              type="submit"
              value="search"
              className="btn btn-danger btn-block"
            />
          </form>
        </div>
        {this.state.isLoaded ? (
          <h4 className="my-4 text-dark text-center">Search Results</h4>
        ) : null}
        <div className="card-columns">
          {this.state.data.map((item, index) => {
            return (
              <Results
                key={index}
                title={item.title}
                body={item.selftext}
                image={
                  "https://www.thewrap.com/wp-content/uploads/2015/02/reddit-logo.jpg"
                }
                goTo={item.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
