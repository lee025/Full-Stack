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

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit} className="login-form-box split">
          Welcome to All the Things!
          <br />
 
          {this.renderErrors()}
          <div className="login-form">
      
            <label>
              <input
                className="login-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder=' Username'
              />
            </label>
      
            <label className={this.props.formType === 'Sign Up' ? '' : 'hidden'}>
              <input
                className="login-input"
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder=' Email'
              />
            </label>
      
            <label>
              <input
                className="login-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder=' Password'
              />
            </label>
            <br />
            <button 
              className='session-button' 
              onClick={this.handleSubmit} 
              value={this.props.formType}>
                {this.props.formType}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
