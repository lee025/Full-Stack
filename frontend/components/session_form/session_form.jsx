import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getValidations = this.getValidations.bind(this);
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
      .then(() => this.props.history.push('/'));
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

  getValidations() {
    const errors = this.state.errors;
    if (!$.isEmptyObject(errors)) {
      errors.forEach(function(error) {
        console.log('error', error.name);
      });
    }
  }

  render() {

    return (
      <section className="login-main">
        <article className="login-left split">
          <div className="login-second">
            <div>
              <div className="login-cow-div">
                <img className="cow-logo" src={window.cow_logoURL} />
              </div>
            </div>

            <blockquote className="blockquote-main">
              <p>
                "You can't be that kid standing at the top of the water slide,
                overthinking it. You have to go down the chute
              </p>
              <footer>- Tina Fey, Bossy Pants</footer>
            </blockquote>

            <div className="avatar-text-main">
              <div>
                <img className="avatar-bob" src={window.avatar_bobURL} />
              </div>
              <div className="avatar-bob-text">
                Quotes curated by Bob T. Monkey, renowned productivity expert
              </div>
            </div>
          </div>
        </article>

        <article className="login-right">
          <form
            onSubmit={this.handleSubmit}
            className="login-form-box split group"
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
                  placeholder=" Username"
                />
              </label>

              <label
                className={this.props.formType === "Sign Up" ? "" : "hidden"}
              >
                <input
                  className="login-input"
                  type="email"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder=" Email"
                />
              </label>

              <label>
                <input
                  className="login-input"
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder=" Password"
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
