import React from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Divider
} from "semantic-ui-react";
import ResponsiveContainer from "../ResponsiveContainer";

const LandingPageLayout = () => (
  <ResponsiveContainer>
    {/* This should be location of feed */}
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        {/* Mentee Information */}
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2.2em" }}>
              Find some folks to learn from...
            </Header>
            <p style={{ fontSize: "1.6em" }}>
              Find a Mentor to help you with your professional development
              goals. Whether you 1-on-1 mentoring or being part of a group,
              we've got you covered!
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/assets/img/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Divider />

        {/* Mentor Information */}
        <Grid.Row>
          <Grid.Column floated="left" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/assets/img/white-image.png"
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2.2em" }}>
              ...Or find some folks to teach!
            </Header>
            <p style={{ fontSize: "1.6em" }}>
              Find Mentees or Groups of Mentees to help guide in their personal
              and professional journey! Grow your teaching skills and network!
            </p>
          </Grid.Column>
        </Grid.Row>
        <Divider />

        {/* Community Information */}
        <Grid.Row>
          <Grid.Column
            width={16}
            textAlign="center"
            style={{ padding: "0rem 10rem" }}
          >
            <Header as="h3" style={{ paddingTop: "1.6em", fontSize: "2.2em" }}>
              All for free!
            </Header>
            <p style={{ fontSize: "1.6em" }}>
              We strive to build a community where the only currency in the
              bonds folks will build with eachother. Bonds with longterm and
              lasting impacts!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default LandingPageLayout;
