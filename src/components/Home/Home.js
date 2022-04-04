import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import './Home.css';
const Home = () => {
  const [reviews,setReviews] = useReview();
  const homeRevieew = reviews.slice(0,3);
  return (
    <div>
      <Container>
        <Row className="g-4">
          <Col sm={12} md={8}  className="left-banner">
              <div>
                  <h1 className="fw-bold">Fragrance of the Mountains</h1>
                  <h2 className="fw-bold ">Base Camp For Men</h2>
                  <p>We may live in cities but our hearts belong to the mountains. Experience the magic of the cool mountain air in Base Camp. Loaded with 3x more fragrance than a deodorant and no gas, this cologne will make sure you smell great all day.</p>
                  <button className="btn btn-info px-3 py-2 fs-5">Live Demo</button>
              </div>
          </Col>
          <Col sm={12} md={4}>
              <img src="https://rukminim2.flixcart.com/image/416/416/ku4ezrk0/perfume/e/d/7/cologne-spray-base-camp-perfume-ustraa-men-original-imag7bgrnpbn57dh.jpeg?q=70" alt="" />
          </Col>
        </Row>
        <div>
          <h2 className="text-center">Customer Review</h2>
          <div>
            <Container>
              <Row xs={1} md={3} className="g-4">
              {
              homeRevieew.map(review=> <ReviewDetails review={review} key={review.id}></ReviewDetails>)
            }
              </Row>
            </Container>
            <div className="text-center pb-4">
            <button className="btn btn-info mt-4 "><Link className="text-decoration-none text-dark" to={'/reviews'}>See all Reviews</Link></button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
