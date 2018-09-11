import React from 'react';
import {
  Grid, Container, Segment, Icon, List, Header,
} from 'semantic-ui-react';

const LandingPageFooter = () => (
  <Segment inverted color="teal" vertical style={{ padding: '8em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Contact Us</List.Item>
              <List.Item as="a">Terms of Service</List.Item>
              <List.Item as="a">Privacy Policy</List.Item>
              <List.Item as="a">Cookie Policy</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Developers</List.Item>
              <List.Item as="a">Jobs</List.Item>
              <List.Item as="a">Blog</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Social Media
            </Header>
            <Icon name="facebook official" inverted link as="i" size="big" />
            <Icon name="twitter" inverted link as="i" size="big" />
            <Icon name="instagram" inverted link as="i" size="big" />
            <Icon name="snapchat ghost" inverted link as="i" size="big" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default LandingPageFooter;
