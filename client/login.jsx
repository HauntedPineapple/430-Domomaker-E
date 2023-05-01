const helper = require("./helper.js");
const React = require("react");
const ReactDOM = require("react-dom");

const handleLogin = (e) => {
  e.preventDefault();
  helper.hideError();

  const username = e.target.querySelector("#user").value;
  const pass = e.target.querySelector("#pass").value;

  if (!username || !pass) {
    helper.handleError("Username or password is empty!");
    return false;
  }

  helper.sendPost(e.target.action, { username, pass });
  return false;
};

const handleSignup = (e) => {
  e.preventDefault();
  helper.hideError();

  const username = e.target.querySelector("#user").value;
  const pass = e.target.querySelector("#pass").value;
  const pass2 = e.target.querySelector("#pass2").value;

  if (!username || !pass || !pass2) {
    helper.handleError("All fields are required!");
    return false;
  }

  if (pass !== pass2) {
    helper.handleError("Passwords do not match!");
    return false;
  }

  helper.sendPost(e.target.action, { username, pass, pass2 });
  return false;
};

const LoginWindow = (props) => {
  return (
    <form
      id="loginForm"
      name="loginForm"
      onSubmit={handleLogin}
      action="/login"
      method="POST"
      className="mainForm"
    >
      <label htmlFor="username">Username: </label>
      <input id="user" type="text" name="username" placeholder="username" />
      <label htmlFor="pass">Password: </label>
      <input id="pass" type="password" name="pass" placeholder="password" />
      <input className="formSubmit" type="submit" value="Sign In" />
    </form>
  );
};

const SignupWindow = (props) => {
  return (
    <form
      id="signupForm"
      name="signupForm"
      onSubmit={handleSignup}
      action="/signup"
      method="POST"
      className="mainForm"
    >
      <label htmlFor="username">Username: </label>
      <input id="user" type="text" name="username" placeholder="username" />
      <label htmlFor="pass">Password: </label>
      <input id="pass" type="password" name="pass" placeholder="password" />
      <label htmlFor="pass">Password: </label>
      <input
        id="pass2"
        type="password"
        name="pass2"
        placeholder="retype password"
      />
      <input className="formSubmit" type="submit" value="Sign Up" />
    </form>
  );
};

const AboutWindow = (props) => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
      doloremque nulla laborum ad numquam porro molestias fugit qui deserunt
      veritatis quo debitis quidem quasi quae voluptatem, veniam enim natus
      officia praesentium suscipit in officiis doloribus excepturi! Obcaecati
      consectetur dolores ea aspernatur, totam adipisci, nobis facere quibusdam,
      corporis dolorum ullam veniam voluptates qui expedita quod amet reiciendis
      soluta quis tenetur sunt quam eos excepturi similique illo. Cumque dolorem
      impedit blanditiis, quam deserunt rerum aspernatur explicabo adipisci
      itaque cum harum provident voluptas, quos tenetur expedita. Ea culpa neque
      magnam voluptatem, quam perspiciatis tempora voluptatibus illo eum enim
      vel est ducimus. Dicta a repellat iste saepe aspernatur dignissimos ea
      quae nam nobis, vero, ab esse. Soluta eos cum voluptates nostrum maiores.
      Rerum maiores eveniet ut perspiciatis doloribus dolore! Nihil, dicta
      excepturi dolore deserunt vel distinctio eligendi tempore debitis deleniti
      tenetur, necessitatibus qui inventore aperiam voluptate, ab ratione!
      Voluptates officia nobis at rem earum.
    </p>
  );
};

const init = () => {
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");
  const aboutButton = document.getElementById("aboutButton");

  loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    ReactDOM.render(<LoginWindow />, document.getElementById("content"));
    return false;
  });

  signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    ReactDOM.render(<SignupWindow />, document.getElementById("content"));
    return false;
  });

  aboutButton.addEventListener("click", (e) => {
    e.preventDefault();
    ReactDOM.render(<AboutWindow />, document.getElementById("content"));
    return false;
  });

  ReactDOM.render(<LoginWindow />, document.getElementById("content"));
};

window.onload = init;
