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

const LoginPageLayout = () => (
  <div>
    <Navbar>
      <Segment inverted color="teal" style={{ padding: "5em 0em" }} vertical>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large">
              <Header
                as="h2"
                textAlign="center"
                style={{ marginTop: "1rem" }}
                inverted
              >
                <div
                  style={{
                    fontSize: "3rem",
                    fontFamily: "Shrikhand, cursive"
                  }}
                >
                  Mentorhub
                </div>
              </Header>
              <Segment inverted color="teal">
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

                <Button fluid inverted size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message style={{ margin: "1rem 0em" }}>New to us? Sign Up</Message>
          </Grid.Column>
        </Grid>
      </Segment>
      <Footer />
    </Navbar>
  </div>
);

export default LoginPageLayout;
