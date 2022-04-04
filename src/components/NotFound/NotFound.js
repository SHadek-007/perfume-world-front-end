import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './NotFound.css'
const NotFound = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6}  className="error-page">
            <div>
                <small className="fw-bold text-secondary">ERROR 404</small>
                <h1 className="fw-bold">Oops! The page you're looking for isn't here.</h1>
                <p className="fs-3">You might have the wrong address, or the page may have moved.</p>
            </div>
          </Col>
          <Col md={6}>
            <img className="w-100" src="https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
