import React from "react";
import {
  Grid,
  Message,
  Form,
  Header,
  Segment,
  Button
} from "semantic-ui-react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const SignupPageLayout = () => (
  <div>
    <Navbar>
      <Segment style={{ padding: "5em 0em" }} vertical>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large">
              <Header as="h2" textAlign="center" style={{ marginTop: "1rem" }}>
                Signup
              </Header>
              <Segment>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />
                <Button fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message style={{ margin: "1rem 0em" }}>
              Already have an account? Log In
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
      <Footer />
    </Navbar>
  </div>
);

export default SignupPageLayout;
