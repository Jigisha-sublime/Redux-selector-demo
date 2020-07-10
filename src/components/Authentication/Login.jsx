import React from 'react';
import { Card, Container, Form, Row, Col, Button } from 'react-bootstrap';

const Login = () => {

  return (
    <Card className="py-3 card-stretch">
      <Card.Header className="no-border">
        <Container fluid>
          <Card.Title className="d-flex justify-content-center">
            Login
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
                    type="email"
                    placeholder="Email address"
                    name="email"
                  // value={email}
                  // onChange={onValueChange}
                  // className={errMessage.email ? "show-error" : ""} 
                  />
                  {/* {errMessage.email && <Form.Text className="text-danger">{errMessage.email}</Form.Text>} */}
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
                    // className={errMessage.password ? "show-error" : ""} 
                    />
                    <div className="icon-container">
                      <Button
                        variant="light"
                        className="icon-style"
                        size="sm"
                      // onClick={toggleShow}
                      >
                        show
                        {/* {showPassword ? "hide" : "show"} */}
                      </Button>
                    </div>
                  </div>
                  {/* {errMessage.password && <Form.Text className="text-danger">{errMessage.password}</Form.Text>} */}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember me" style={{ textAlign: 'initial' }} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Card.Body>
      <Card.Footer className="no-border">
        <Container fluid>
          <Button size="lg" block
          // onClick={LoginUser}
          >
            Login
      </Button>
        </Container>
      </Card.Footer>
      <Container>
        <Card.Text>Don't have an account ? <Card.Link
        // onClick={changeToSignup} 
        >Sign Up</Card.Link> </Card.Text>
      </Container>
    </Card>
  )
};

export default Login;
