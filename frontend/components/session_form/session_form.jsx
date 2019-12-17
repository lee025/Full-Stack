import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to All the Things!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              Username:
              <input
                className="login-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              email:
              <input
                className="login-input"
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br />
            <button onClick={this.handleSubmit}>{this.props.formType}</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
