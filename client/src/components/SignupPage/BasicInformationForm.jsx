import React from "react";
import { Form, Header, Segment, Button, Icon } from "semantic-ui-react";

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
      <Button fluid color="teal" size="large">
        Next<Icon name="arrow right" />
      </Button>
    </Segment>
  </Form>
);

export default BasicInformationForm;
