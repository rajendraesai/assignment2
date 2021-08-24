import './index.css'
import {Component} from 'react'

class Login extends Component {
  state = {isEmail: false, isPassword: false, isForm: false}

  handleEmailInput(event) {
    const emailInput = event.target.value
    this.form(emailInput)
  }

  handlePasswordInput(event) {
    const passwordInput = event.target.value
    this.form(passwordInput)
  }

  form(input1, input2) {
    this.validateForm(input1, input2)
  }

  submitForm(event) {
    event.preventDefault()
    this.handleEmailInput(event)
    this.handlePasswordInput(event)
  }

  validateForm(emailInput, passwordInput) {
    if (emailInput === '') {
      this.setState({isEmail: true})
    }

    if (passwordInput === '') {
      this.setState({isPassword: true})
    }

    if (emailInput !== '' && passwordInput !== '') {
      this.setState({isForm: true})
    }
  }

  render() {
    const {isEmail, isPassword, isForm} = this.state
    return (
      <>
        <form>
          <div className="bg">
            <h3 style={{color: '#161717'}}>Omega</h3>
            <div className="login-card">
              <h1 style={{color: 'white'}}>Sign In</h1>
              <p style={{color: 'white'}}>Enter your account details below</p>
              <input
                type="text"
                placeholder="Email address"
                className="input-field"
                name="email"
                onInputCapture={this.handleInput}
              />
              <p>{isEmail ? 'Please Enter your Email' : ''}</p>
              <div className="field input-field">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  style={{border: 'none'}}
                  onInputCapture={this.handleInput}
                />
                <p style={{fontSize: '12px'}}>
                  <a href="link" className="forgot-link">
                    Forgot Password
                  </a>
                </p>
              </div>
              <p>{isPassword ? 'Please enter your Password' : ''}</p>
              <div className="field" style={{paddingLeft: '5px'}}>
                <input type="checkbox" />
                <p style={{color: 'white', fontSize: '12px'}}>
                  Keep me signed in
                </p>
              </div>
              <button
                type="button"
                className="login-button"
                onClick={this.submitForm}
              >
                Get Started
              </button>
              <p style={{fontSize: '12px'}}>
                Do you have an account?{' '}
                <a href="link" className="create-link">
                  Create for free
                </a>
              </p>
              <p>{isForm ? 'Form Submitted Successfully' : ''}</p>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Login
