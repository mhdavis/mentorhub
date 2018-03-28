import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import ResponsiveContainer from "../ResponsiveContainer";

const LandingPageLayout = () => (
  <ResponsiveContainer>
    {/* This should be location of feed */}
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        {/* Mentee Information */}
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We can give your company superpowers to do things that they never
              thought possible. Let us delight your customers and empower your
              needs... through pure data analytics.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We Make Bananas That Can Dance
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              bananas can be bioengineered.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="/assets/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>

        {/* Mentor Information */}
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>

        {/* Community Information */}
      </Grid>
    </Segment>
  </ResponsiveContainer>
);

export default LandingPageLayout;
