import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello, Guest!",
      buttonText: "log in",
    };
  }

  handleClick() {
    this.setState((prevState, prevProps) => {
      console.log("Previous State", prevState);
      console.log("Previous Props", prevProps);
      return {
        message:
          prevState.message === "Hello, Guest!"
            ? "Welcome back, user!"
            : "Hello, Guest!",
        buttonText: prevState.buttonText === "log in" ? "log out" : "log in",
      };
    });
  }

  render() {
    return (
      <nav className={css.NavBar}>
        <h1>My Gallery</h1>
        <div>
          <span>{this.state.message}</span>
          <button onClick={() => this.handleClick()}>
            {this.state.buttonText}
          </button>
        </div>
      </nav>
    );
  }
}
export default NavBarSimple;
