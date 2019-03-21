import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Alert, Input } from 'reactstrap';
import Header from './Header';
import { post } from '../utils/helper';

export default function App() {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [flashMessage, setFlashMessage] = useState(null);

  function handleOnclick() {
    post('/api/feedbacks', { name, comments })
      .then(() => {
        setFlashMessage({ color: 'success', text: 'Form submitted successfully' });
        setName('');
        setComments('');
      }).catch(() => {
        setFlashMessage({ color: 'danger', text: 'Form had an error' });
      });
  }

  return (
    <React.Fragment>
      <Header title="Tell us what you think" />
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            {flashMessage && (
              <Alert color={flashMessage.color}>
                {flashMessage.text}
              </Alert>
            )}

            <Form>
              <FormGroup>
                <Label for="name">Your name:</Label>
                <Input
                  onChange={(event) => {
                  setName(event.target.value);
                }}
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="comments">Comments:</Label>
                <Input
                  onChange={(event) => {
                  setComments(event.target.value);
                }}
                  type="textarea"
                  name="comments"
                  id="comments"
                  value={comments}
                />
              </FormGroup>
              <Button onClick={handleOnclick} color="primary">Submit</Button>
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
