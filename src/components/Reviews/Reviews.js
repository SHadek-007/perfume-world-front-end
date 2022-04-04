import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews,setReviews] = useReview();
    return (
        <div className='container'>
            <Row xs={1} md={3} className="g-4">
            {
                reviews.map(review=> <ReviewDetails key={review.id} review={review}></ReviewDetails>)
            }
            </Row>
        </div>
    );
};

export default Reviews;