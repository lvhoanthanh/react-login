import React from "react";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import { userActions } from "../../actions";
import { Input, LinkStyled, Button } from "../../components/common";
import { FormWrapper } from "./LoginPage.styled";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // reset login status
    // if (localStorage.getItem("user")) {
    //   this.props.logout();
    // }

    this.state = {
      email: "",
      password: "",
      submitted: false,
      message: "",
    };
    //binding func
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //handle event change
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  //handle submit form
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    // console.log({ username, password });
    if (email && password) {
      this.props.login(email, password);
    }
  }

  render() {
    const { isLoading } = this.props;
    const { email, password, submitted, message } = this.state;
    return (
      <FormWrapper>
        <form name="form" onSubmit={this.handleSubmit}>
          <h2 className="text-center">Login</h2>
          <div className="form-box">
            <label htmlFor="username">Email:</label>
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></Input>
            {submitted && !email && (
              <div className="help-block">Email is required</div>
            )}
            {message}
          </div>
          <div className="form-box">
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            ></Input>
            {submitted && !password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-box">
            <Button>Login</Button>

            <LinkStyled to="/register" className="mg-left-20" nobg="true">
              Register
            </LinkStyled>
          </div>
        </form>
        {isLoading && <Loading></Loading>}
      </FormWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { isLoading } = state.authentication; // state.authentication.isLoading;
  return { isLoading };
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };
