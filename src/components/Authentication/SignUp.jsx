import React from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';

const SignUp = () => (
  <Card className="py-3">
    <Card.Header className="no-border">
      <Container fluid>
        <Card.Title className="d-flex justify-content-center">
          Sign Up
        </Card.Title>
      </Container>
    </Card.Header>
    <Card.Body className="no-border">
      <Container fluid>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  name="fname"
                // value={fname}
                // onChange={onValueChange}
                // className={error.fname ? "show-error" : ""}
                />
                {/* {error.fname && <Form.Text className="text-danger">{error.fname}</Form.Text>} */}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                // value={lname}
                // onChange={onValueChange}
                // className={error.lname ? "show-error" : ""}
                />
                {/* {error.lname && <Form.Text className="text-danger">{error.lname}</Form.Text>} */}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  name="email"
                // value={email}
                // onChange={onValueChange}
                // className={error.email ? "show-error" : ""} 
                />
                {/* {error.email && <Form.Text className="text-danger">{error.email}</Form.Text>} */}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <div className="password-show-btn">
                  <Form.Control
                    type="text"
                    // type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                  // value={password}
                  // onChange={onValueChange}
                  // className={error.password ? "show-error" : ""} 
                  />
                  <div className="icon-container">
                    <Button
                      className="icon-style"
                      variant="light"
                      size="sm"
                    // onClick={toggleShow}
                    >
                      show
                      {/* {showPassword ? "hide" : "show"} */}
                    </Button>
                  </div>
                </div>
                {/* {error.password && <Form.Text className="text-danger">{error.password}</Form.Text>} */}
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </Card.Body>
    <Card.Footer className="no-border">
      {/* {displayMessge && <Card.Text className="message">You have registered successfully ! </Card.Text>} */}
      <Container fluid>
        <Button size="lg" block
        // onClick={submitForm}
        >
          Sign Up
          </Button>
      </Container>
    </Card.Footer>
    <Container>
      <Card.Text>Already have an account ? <Card.Link
      // onClick={changeToLogin}
      >Login</Card.Link> </Card.Text>
    </Container>
  </Card>
);

export default SignUp;
