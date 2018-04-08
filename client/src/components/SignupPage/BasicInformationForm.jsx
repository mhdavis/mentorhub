import React from "react";
import { Form, Segment, Button, Icon, Message } from "semantic-ui-react";

const BasicInformationForm = () => (
  <Form size="large">
    <Segment vertical textAlign="left">
      <Message
        header="Basic Information"
        content="Some basic information for account creation!"
      />
      <Form.Field>
        <label>E-mail Address</label>
        <Form.Input icon="mail" iconPosition="left" type="email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <Form.Input fluid icon="lock" iconPosition="left" type="password" />
      </Form.Field>
      <Form.Field>
        <label>Confirm Password</label>
        <Form.Input fluid icon="lock" iconPosition="left" type="password" />
      </Form.Field>
      <Form.Field>
        <label>First Name</label>
        <Form.Input fluid icon="user" iconPosition="left" type="text" />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <Form.Input fluid icon="user" iconPosition="left" type="text" />
      </Form.Field>
      <Button fluid color="teal" size="large">
        Next<Icon name="arrow right" />
      </Button>
    </Segment>
  </Form>
);

export default BasicInformationForm;
