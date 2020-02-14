import React from "react";
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      // errors: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/lists"))
      .then(() => this.props.clearErrors());

    // if(this.props.processForm(user)){
    //   return this.props.history.push('/lists')
    // } else {
    //   return this.props.history.push('/')
    // }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>{error}</li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevState) {
    // console.log(this.props.errors);
    // console.log(this.props.formType);
    var errors = this.props.errors;
    var form = this.props.formType;
    // if (prevState.props.formType !== this.props.formType){

    // }
  }

  // refresh() {
  //   window.location.reload(false);
  // }

  render() {
    console.log(this.props)
    return (
      <section className="login-main" id='wrapper'>
        <article className="login-left split">
          <div className="login-second">
            <div>
              <div className="login-calvin-div">
                <img className="calvin-logo" src={window.calvin_logoURL} />
              </div>
            </div>

            <blockquote className="blockquote-main">
              <p>
                "You can't be that kid standing at the top of the water slide,
                overthinking it. You have to go down the chute
              </p>
              <footer>- Tina Fey, Bossy Pants</footer>
            </blockquote>

            <div className="calvin-box-text-main">
              <div>
                <img className="calvin-box" src={window.calvin_boxURL} />
              </div>
              <div className="calvin-box-text">
                Quotes curated by John Calvin and Thomas Hobbes, renowned productivity experts
              </div>
            </div>
          </div>
        </article>

        <article className="login-right">

          <form
            onSubmit={this.handleSubmit}
            className="login-form-box split"
          >
            <h3 className="welcome">Welcome to All the Things!</h3>

            <center>{this.renderErrors()}</center>
            <div className="login-form">
              <label>
                <input
                  className="login-input "
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                />
              </label>

              <label
                className={this.props.formType === "Sign Up" ? "" : "hidden"}
              >
                <input
                  className="login-input"
                  type="email"
                  pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$"
                  required
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              </label>

              <label>
                <input
                  className="login-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
              </label>
              <br />
              <button
                className="session-button"
                onClick={this.handleSubmit}
                value={this.props.formType}
              >
                {this.props.formType}
              </button>
            </div>
          </form>
        </article>
      </section>
    );
  }
}

export default SessionForm;
