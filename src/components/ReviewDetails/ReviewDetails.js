import React from "react";
import { Card, Col } from "react-bootstrap";
import './ReviewDetails.css';

const ReviewDetails = (props) => {
  const { name, review, ratings,img } = props.review;
  return (
    <div>
      <Col>
        <Card className="shadow bg-light p-3">
          <Card.Img className="w-25 m-auto " variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text className="fw-bold">Rating: <span className="text-warning"> {ratings} </span></Card.Text>
            <Card.Text> <small>“{review}”</small> </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ReviewDetails;
