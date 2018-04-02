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
import BasicInformationForm from "./BasicInformationForm";

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
            <BasicInformationForm />
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
