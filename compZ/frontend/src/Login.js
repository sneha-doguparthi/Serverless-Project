import React, { Component } from "react";
import errMsg from "./errormessages";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    const { jobName } = this.props.match.params;
    this.state = {
      email: "",
      password: "",
      errorMsg: "",
      jobName: jobName,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      validationErrorFlag: false,
    });
  };

  async apiCall() {
    try {
      await axios
        .get(
          `http://localhost:4000/api/users/${this.state.email}/${this.state.password}`
        )
        .then((res) => {
          console.log("res", res);
          if (res.status === 200) {
            this.props.history.push(`/orderpage/${this.state.jobName}`);

            this.setState({
              email: "",
              password: "",
              errorMsg: "",
            });
          }
        })
        .catch((err) => {
          console.log("err", err);
          this.setState({
            //errorMsg: err.response.data,
          });
        });
    } catch (err) {
      this.setState({
        errorMsg: err,
      });
    }
  }

  onLoginSubmit = (e) => {
    e.preventDefault();

    this.setState({
      validationErrorFlag: false,
      errorMsg: "",
    });

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validEmail = re.test(String(this.state.email).toLowerCase());

    if (
      this.state &&
      this.state.email &&
      this.state.password &&
      this.state !== {} &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      //email address validation
      if (!validEmail) {
        this.setState({
          validationErrorFlag: true,
          errorMsg: errMsg["2"],
        });
        return;
      }

      this.apiCall();
    } else {
      this.setState({
        validationErrorFlag: true,
        errorMsg: errMsg["1"],
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container pt-4 pb-4">
          <div className="row justify-content-center pt-4">
            <div className="col-12 col-sm-6 col-md-4 pt-4 signup-div border rounded">
              <h3 className="registerTitle text-center">Login</h3>

              <form className="form-container pt-2 pb-5">
                <p className="error-msg" style={{ color: "red" }}>
                  {this.state.errorMsg ? this.state.errorMsg : null}
                </p>
                <div className="form-group">
                  <label htmlFor="email"> Email Address </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email Address"
                    required
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    required
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    onClick={this.onLoginSubmit}
                    type="submit"
                    className="btn btn-info btn-centre"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;