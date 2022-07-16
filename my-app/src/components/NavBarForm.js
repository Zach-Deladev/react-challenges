import React from "react";
import css from "./css/NavBarForm.module.css";
import NavBarChild from "./NavBarChild";

class NavBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

//   This click handler changes the state of isLoggedIn from false to true and back again.
  handleClick = () => {
    this.setState({
      isLoggedIn: true,
    });
    console.log(this);
  };

  render() {
    return (
      <nav className={css.NavBar}>
        <h1>My Gallery</h1>

        <NavBarChild
          isLoggedIn={this.state.isLoggedIn}
          handleClick={this.handleClick}
        />
      </nav>
    );
  }
}
export default NavBarForm;
