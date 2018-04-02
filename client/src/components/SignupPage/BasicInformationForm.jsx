import React from "react";
import {
  Grid,
  Message,
  Form,
  Header,
  Segment,
  Button
} from "semantic-ui-react";

const BasicInformationForm = () => (
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
      <Form.Input fluid icon="" iconPosition="left" placeholder="Skill" />
      <Button fluid size="large">
        Sign Up
      </Button>
    </Segment>
  </Form>
);

export default BasicInformationForm;
