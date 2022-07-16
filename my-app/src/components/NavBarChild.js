// Nested Child component for NavBarForm

import React from "react";

// This conditionally renders either the existing Login Button or a form element containing a Submit Button. Ensure the Submit Button contains the same onClick attribute, handleClick(), as the Log in Button.
function NavBarChild(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <form>
          <label htmlFor="Uname">Username:</label>
          <input type="text" />
          <label htmlFor="Password">Password:</label>
          <input type="text" />
          <button onClick={props.handleClick}>Submit</button>
        </form>
      ) : (
        <button onClick={props.handleClick}>Login</button>
      )}
    </div>
  );
}

export default NavBarChild;
