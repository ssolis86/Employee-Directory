import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

class Search extends Component {
  state = {
    search: "",
    users: [],
    origin: []

  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getBaseUsers()
      .then(res => this.setState({users: res.data.results, origin: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.search === ""){
      this.setState({ users: this.state.origin})
    } else {
      const searchedUsers = this.state.users.filter((key) => this.state.search === key.name.first)
      this.setState({ users: searchedUsers })
    }
  };
  
  handleFormAlpha = event => {
    event.preventDefault();
    const sortedUsers = [...this.state.users].sort((a, b) => a.name.first.localeCompare(b.name.first))
    this.setState({ users: sortedUsers});
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search by a category!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.users}
            handleFormAlpha={this.handleFormAlpha}
          />
          <SearchResults results={this.state.users} />
        </Container>
      </div>
    );
  }
}

export default Search;
