import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <Row className='g-4'>
                    <Col md={6}>
                        <h3>Basic Questions</h3>
                        <h5>What is accessibility?</h5>
                        <p>This article starts off the module with a good look at what accessibility is — this includes what groups of people we need to consider and why, what tools different people use to interact with the web, and how we can make accessibility part of our web development workflow.</p>


                    </Col>
                    <Col md={6}>
                        <h3>Advanced Questions</h3>
                        <h5>Accessible multimedia?</h5>
                        <p>Another category of content that can create accessibility problems is multimedia — video, audio, and image content need to be given proper textual alternatives, so they can be understood by assistive technologies and their users. This article shows how.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;