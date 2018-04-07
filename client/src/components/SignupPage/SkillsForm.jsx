import React, { Component } from "react";
import { Form, Segment, Button } from "semantic-ui-react";

class SkillsForm extends Component {
  state = {
    skills: []
  };

  addSkillLabel = skill => {
    this.setState({ skills: [...this.state.skills, skill] });
  };

  render() {
    return (
      <Form size="large">
        <Segment>
          <Form.Input iconPosition="left" placeholder="Skill" />
          <Button size="large">Add</Button>
        </Segment>
      </Form>
    );
  }
}

export default SkillsForm;
