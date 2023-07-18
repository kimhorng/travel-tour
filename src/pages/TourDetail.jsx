import React, { useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import caculateAbgRating from "../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/Newsletter";
const TourDetail = () => {
  const { id } = useParams();

  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  // this is a static data later we will call our Api and load our dta from database
  const tour = tourData.find((tour) => tour.id === id);

  // destructure propertises from tour object

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;
  const { totalRating, avgRating } = caculateAbgRating(reviews);

  // format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // submit request to the server
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`${reviewText}, ${tourRating}`);
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content">
              <img src={photo} alt={title} />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className="d-flex  align-items-center gap-5 ">
                  <span className="tour__rating d-flex align-items-center gap-1 ">
                    <i
                      className="ri-star-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not Rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    <i
                      className="ri-map-pin-fill"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span>
                    <i
                      className="ri-map-pin-2-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {city}
                  </span>
                  <span>
                    <i
                      className="ri-money-dollar-circle-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    ${price} / per person
                  </span>
                  <span>
                    <i
                      className="ri-map-pin-time-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {distance} k/m
                  </span>
                  <span>
                    <i
                      className="ri-group-line"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {maxGroupSize}
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ========= tour reviews section start =========== */}
              <div className="tour__reviews mt-4">
                <h4>Reviews {reviews?.length} reviews </h4>
                <Form onSubmit={submitHandler}>
                  <div className="rating__group d-flex align-content-center gap-3 mb-4 ">
                    <span onClick={() => setTourRating(1)}>
                      1 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i className="ri-star-s-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i className="ri-star-s-fill"></i>
                    </span>
                  </div>
                  <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="share your thoughts"
                    />
                    <button
                      className="btn primary__btn text-white "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user__reviews">
                  {reviews?.map((reviews, index) => (
                    <div className="review__item" key={index}>
                      <img src={avatar} alt="" />

                      <div className="w-100">
                        <div className="d-flex align-content-center justify-content-between ">
                          <div>
                            <h5>Kimhorng</h5>
                            <p>
                              {new Date("01-18-2023").toLocaleDateString(
                                "en-US",

                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-content-center ">
                            5 <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
              {/* ========= tour reviews section end ===========*/}
            </div>
          </Col>

          <Col lg="4">
            <Booking tour={tour} avgRating={avgRating} />
          </Col>
        </Row>
      </Container>
      <NewsLetter />
    </section>
  );
};

export default TourDetail;
