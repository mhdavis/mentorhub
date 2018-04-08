import React from "react";
import { Grid, Message, Segment, Header } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import ReactRouterPropTypes from "react-router-prop-types";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BasicInformationForm from "./BasicInformationForm";
import SkillsForm from "./SkillsForm";

const SignupPageLayout = ({ match }) => (
  <div>
    <Navbar>
      <Segment style={{ padding: "5em 0em" }} vertical>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <div>
              <Header
                as="h1"
                textAlign="center"
                style={{ marginTop: "1rem", fontFamily: "Shrikhand, cursive" }}
              >
                Signup
              </Header>
              <Switch>
                <Route
                  path={`${match.path}`}
                  exact
                  component={BasicInformationForm}
                />
                <Route
                  path={`${match.path}/basic_information`}
                  component={BasicInformationForm}
                />
                <Route path={`${match.path}/skills`} component={SkillsForm} />
              </Switch>
            </div>
            <Message warning style={{ margin: "1rem 0em" }}>
              Already have an account? Log In
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
      <Footer />
    </Navbar>
  </div>
);

SignupPageLayout.propTypes = {
  // eslint-disable-next-line react/no-typos
  match: ReactRouterPropTypes.match.isRequired
};

export default SignupPageLayout;
