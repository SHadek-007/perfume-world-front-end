import React from "react";
import { Card, Col } from "react-bootstrap";

const ReviewDetails = (props) => {
  const { name, review, ratings,img } = props.review;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img className="w-25 m-auto p-2" variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{review}</Card.Text>
            <Card.Text>Rating: {ratings}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ReviewDetails;
