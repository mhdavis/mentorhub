import React from 'react';
import {
  Grid, Header, Image, Segment,
} from 'semantic-ui-react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AboutPageLayout = () => (
  <div>
    <Navbar activeItem="About">
      <Segment style={{ padding: '3em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          {/* The Beginning */}
          <Grid.Row style={{ padding: '5em 0em' }}>
            <Grid.Column width={8}>
              <Header
                as="h1"
                color="teal"
                style={{ fontSize: '3.0em', fontFamily: 'Shrikhand, cursive' }}
              >
                The Beginning
              </Header>
              <p style={{ fontSize: '1.5em' }}>
                Mentorhub is a platform designed with one goal in mind:
                <strong>helping those who wish to grow learn from experienced individuals</strong>
.
              </p>
              <p style={{ fontSize: '1.5em' }}>
                The idea for the platform came from my own personal experience. I have found that
                learning from a mentor who can encourage you and inspire you leads to greate
                results.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src="/assets/img/white-image.png" />
            </Grid.Column>
          </Grid.Row>

          {/* The Problem */}
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image bordered rounded size="large" src="/assets/img/white-image.png" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header
                as="h1"
                color="teal"
                style={{ fontSize: '3.0em', fontFamily: 'Shrikhand, cursive' }}
              >
                The Problem
              </Header>
              <p style={{ fontSize: '1.5em' }}>
                Finding a mentor figure in life can be a difficult process. To begin with, its hard
                to determine if an individual is willing to commit to mentoring.
              </p>
              <p style={{ fontSize: '1.5em' }}>
                Online forums and chat groups can help connect mentors and mentees but there
                isn&apos;t a robust platform built for that specific purpose in mind.
              </p>
            </Grid.Column>
          </Grid.Row>

          {/* The Solution */}
          <Grid.Row style={{ padding: '5em 0em' }}>
            <Grid.Column width={8}>
              <Header
                as="h1"
                color="teal"
                style={{ fontSize: '3.0em', fontFamily: 'Shrikhand, cursive' }}
              >
                The Solution
              </Header>
              <p style={{ fontSize: '1.5em' }}>
                Create a microservice and social platform which allows Mentor figures to connect
                with Mentee figures and receive personal and professional advice on how to improve
                themselves in a given field!
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src="/assets/img/white-image.png" />
            </Grid.Column>
          </Grid.Row>

          {/* The Inspiration */}
          <Grid.Row centered style={{ paddingBottom: '5em' }}>
            <Grid.Column width={12} textAlign="center">
              <Header
                as="h1"
                color="teal"
                style={{ fontSize: '3.0em', fontFamily: 'Shrikhand, cursive' }}
              >
                The Inspiration
              </Header>
              <p style={{ fontSize: '1.5em' }}>
                The inspiration for this platform came from several talks that discuss the value of
                having a mentor.
              </p>
              <p style={{ fontSize: '1.5em' }}>
                Likewise, threads on messageboards with postings from people eager to help people
                starting out in a discipline showed a vaccuum were a platform such as
                {' '}
                <strong>
                  <em>Mentorhub</em>
                </strong>
                {' '}
                could be useful!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Footer />
    </Navbar>
  </div>
);

export default AboutPageLayout;
