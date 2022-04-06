import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "../../components/Loading";
import { userActions } from "../../actions";
import { Input, Button, LinkStyled } from "../../components/common";
import { FormWrapper } from "./RegisterPage.styted";
class RegisterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: "",
        email: "",
        password: "",
      },
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.username && user.email && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { isLoading } = this.props;
    const { user, submitted } = this.state;
    return (
      <FormWrapper>
        <form name="form" onSubmit={this.handleSubmit}>
          <h2 className="text-center">Register</h2>
          <div
            className={
              "form-box" + (submitted && !user.username ? " has-error" : "")
            }
          >
            <label htmlFor="name">Username:</label>
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={this.handleChange}
            ></Input>
            {submitted && !user.username && (
              <div className="help-block">Username is required</div>
            )}
          </div>
          <div className="form-box">
            <label htmlFor="email">Email:</label>
            <Input
              type="text"
              name="email"
              value={user.email}
              onChange={this.handleChange}
            />
            {submitted && !user.email && (
              <div className="help-block">Email is required</div>
            )}
          </div>
          <div className="form-box">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-box"
              name="password"
              value={user.password}
              onChange={this.handleChange}
            />
            {submitted && !user.password && (
              <div className="help-block">Password is required</div>
            )}
          </div>
          <div className="form-box">
            <Button>Register</Button>
            <LinkStyled to="/login" className="mg-left-20" nobg="true">
              Cancel
            </LinkStyled>
          </div>
        </form>
        {isLoading && <Loading></Loading>}
      </FormWrapper>
    );
  }
}

function mapStateToProps(state) {
  const { isLoading } = state.registration;
  return { isLoading };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(
  mapStateToProps,
  actionCreators
)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
