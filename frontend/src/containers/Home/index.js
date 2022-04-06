import React, { Component } from "react";
import { connect } from "react-redux";
import { LinkStyled, Container } from "../../components/common";
import Header from "../../components/layouts/DefaultLayout/Header";
import Footer from "../../components/layouts/DefaultLayout/Footer";
import Intro from "./Intro";
import Features from "./Features";
import Sidebar from "../../components/layouts/Sidebar";
class Home extends Component {
  // componentDidMount() {
  //   const fetchClassList = async () => {
  //     try {
  //       await classService.getAllClasses();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchClassList();
  // }
  render() {
    const { user } = this.props;
    // console.log(user.user);
    return (
      <Container className="mg-top-53">
        <Header></Header>
        <div>
          <h1>Hi {user && user.user.username}!</h1>
          <p>You're logged in with React!!</p>
          <LinkStyled to="/login" className="btn btn-secondary">
            Logout
          </LinkStyled>
        </div>
        <Intro></Intro>
        <Features></Features>
        <Footer></Footer>
      </Container>
    );
  }
}

function mapStatetoProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return { user };
}

const connectedHome = connect(mapStatetoProps, null)(Home);
export { connectedHome as Home };
