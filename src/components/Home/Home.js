import { Col, Container, Row } from "react-bootstrap";
import useReview from "../../hooks/useReview";
import './Home.css';
const Home = () => {
  const [reviews,setReviews] = useReview();
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
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
