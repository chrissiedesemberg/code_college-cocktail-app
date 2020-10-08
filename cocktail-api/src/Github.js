import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import {
  Media,
  Form,
  Button,
  FormControl,
  FormGroup,
  Link,
} from "react-bootstrap";

class GitHub extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchTerm: "",
      isLoading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.getGitHubData(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  componentDidMount() {
    this.getGitHubData("greg");
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }

  render() {
    const listUsers = this.state.data.map((user) => (
      <Media style={github_look.styling1} key={user.id}>
        <img width={64} height={64} src={user.avatar_url} alt="Image" />
        {/* <Link to={`/github/user/${user.login}/${user.score}`}>
          
        </Link> */}
        <Media.Body>
          <h5>Login: {user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    ));

    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="formInlineName">
            <FormControl
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
            />
          </FormGroup>{" "}
          <Button type="submit">Search</Button>
        </Form>
        <h3>GitHub Users Results</h3>
        {this.state.isLoading && <ReactLoading type="spin" color="#444" />}
        {listUsers}
      </div>
    );
  }
}

export default GitHub;

const github_look = {
  styling1: {
    display: "inline-flex",
    width: "200px",
    height: "200px",
    fontSize: "20px",
    padding: "30px",
  },
};
