import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header';

export default function App() {
  return (
    <React.Fragment>
      <Header title="Tell us what you think" />
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <Form>
              <FormGroup>
                <Label for="name">Your name:</Label>
                <Input type="text" name="name" id="name" />
              </FormGroup>
              <FormGroup>
                <Label for="comments">Comments:</Label>
                <Input type="textarea" name="comments" id="comments" />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
            <footer className="mt-4">
              <p className="text-muted text-center" style={{ fontSize: '0.6em' }}>
                Copyright: Appfolio Inc. Onboarding
              </p>
            </footer>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

/* TODO: Add Prop Types check*/
