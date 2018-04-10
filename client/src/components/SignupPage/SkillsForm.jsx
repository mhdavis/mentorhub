import React, { Component } from "react";
import { Form, Segment, Button, Label, Message, Icon } from "semantic-ui-react";

class SkillsForm extends Component {
  state = {
    term: "",
    skills: []
  };

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  onAddSkill = event => {
    event.preventDefault();
    if (this.state.term !== "") {
      this.setState({
        term: "",
        skills: [...this.state.skills, this.state.term]
      });
    }
  };

  render() {
    const { skills, term } = this.state;
    return (
      <Segment vertical textAlign="left">
        <Message
          header="List Your Skills"
          content="These skills will allow folks to find you based on what you've listed!"
        />
        <Form onSubmit={this.onAddSkill}>
          <Form.Group>
            <Form.Input
              icon="student"
              iconPosition="left"
              placeholder="Add a skill here!"
              onChange={this.onChange}
              value={term}
            />
            <Button color="teal" type="submit">
              Add
            </Button>
          </Form.Group>
        </Form>
        <Segment>
          {skills.length === 0 ? <p>No Skills Added</p> : null}
          {skills.map(skill => {
            return (
              <Label
                style={{ marginTop: "0.2em", marginBottom: "0.2em" }}
                color="teal"
              >
                {skill} <Icon name="close" />
              </Label>
            );
          })}
        </Segment>
        <Button fluid color="teal" size="large">
          Next<Icon name="arrow right" onClick={this.removeSkill} />
        </Button>
      </Segment>
    );
  }
}

export default SkillsForm;
