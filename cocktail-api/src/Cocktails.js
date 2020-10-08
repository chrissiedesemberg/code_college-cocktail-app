import React, { Component } from "react";
import axios from "axios"; // npm install axios
import ReactLoading from "react-loading";
import { Media, NavLink } from "react-bootstrap";

class Cocktails extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: "",
      isLoading: false,
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.getCocktail(this.state.cocktail);
  }

  handleChange(e) {
    this.setState({ cocktail: e.target.value });
  }

  getCocktail(cocktail) {
    axios
      .get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail
      )
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.drinks,
        });
        console.log(res.data.drinks);
      });
  }

  render() {
    const listDrink = this.state.data.map((drink) => (
      <Media style={cocktail_listItem.mainBlock} key={drink.idDrink}>
        <div>
          <img
            width={130}
            height={130}
            padding={20}
            src={drink.strDrinkThumb}
            alt="Image of cocktail"
          />
          {drink.strVideo && (
            <NavLink
              target="_blank"
              style={cocktail_listItem.video}
              href={drink.strVideo}
            >
              See video instruction
            </NavLink>
          )}
        </div>
        <Media.Body style={cocktail_listItem.information}>
          <h2>{drink.strDrink}</h2>
          <p>
            <strong>Glass type: </strong>
            {drink.strGlass}
          </p>
          <ul style={cocktail_listItem.item}>
            <strong>Ingredients:</strong>
            {drink.strIngredient1 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure1} {drink.strIngredient1}
              </li>
            )}
            {drink.strIngredient2 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure2} {drink.strIngredient2}
              </li>
            )}
            {drink.strIngredient3 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure3} {drink.strIngredient3}
              </li>
            )}
            {drink.strIngredient4 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure4} {drink.strIngredient4}
              </li>
            )}
            {drink.strIngredient5 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure5} {drink.strIngredient5}
              </li>
            )}
            {drink.strIngredient6 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure6} {""}
                {drink.strIngredient6}
              </li>
            )}
            {drink.strIngredient7 && (
              <li style={cocktail_listItem.item}>
                {drink.strMeasure7} {drink.strIngredient7}
              </li>
            )}
          </ul>
          <p>
            <strong>Instructions:</strong>
            {drink.strInstructions}
          </p>
        </Media.Body>
      </Media>
    ));
    return (
      <div style={cocktail_layout.mainBlock}>
        <hr />
        <section className="section" style={cocktail_layout.formSection}>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="input"
              id="addInput"
              placeholder="Enter cocktail name here"
              onChange={this.handleChange}
              style={cocktail_layout.input}
            />
            <button style={cocktail_layout.submit} className="button is-info">
              Search
            </button>
          </form>
        </section>

        {this.state.isLoading && (
          <ReactLoading type="spinningBubbles" color="#444" />
        )}
        <hr />
        <div>{listDrink}</div>
        <div style={footer.main}>API used: thecocktaildb.com </div>
        <div style={footer.main}>React Project - code college</div>
      </div>
    );
  }
}
export default Cocktails;

const cocktail_listItem = {
  mainBlock: {
    border: "solid 1px lightgray",
    borderRadius: "5px",
    display: "inline-flex",
    width: "300px",
    margin: "30px 35px 30px 35px",
    height: "250px",
    fontSize: "10px",
    padding: "20px 20px",
    backgroundColor: "lightgray",
    color: "rgb(42,42,45)",
    textAlign: "left",
  },
  information: {
    width: "500px",
    padding: "0 10px",
  },
  item: {
    listStyleType: "None",
    paddingLeft: "None",
    paddingInlineStart: "0",
  },
  video: {
    padding: "40px 0",
    textAlign: "center",
    color: "rgb(42,42,45)",
    fontWeight: "bold",
    textAlign: "center",
  },
};

const cocktail_layout = {
  mainBlock: {
    backgroundColor: "rgb(42,42,45)",
    padding: "10px",
  },
  formSection: {
    textAlign: "center",
    height: "50px",
  },
  input: {
    height: "20px",
    width: "200px",
    margin: "10px",
  },
  button: {
    margin: "20px",
  },
};

const footer = {
  main: {
    backgroundColor: "rgb(42,42,45)",
    paddingTop: "10px",
  },
};
