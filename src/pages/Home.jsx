import React from "react";
import "../styles/home.css";

import SubTitle from "../shared/SubTitle";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeatureTourList from "../components/Featured-tours/FeatureTourList";
import MasonryImageGallery from "../components/Image-gallery/MasonryImageGallery";
import Testimonails from "../components/Testimonial/Testimonails";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ========= hero section start ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex  align-items-center ">
                  <SubTitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door the creating
                  <span className="highlight"> memeories</span>
                </h1>
                <p>
                  Traveling is a great way to create lasting memories. When you
                  travel, you experience new things, meet new people, and see
                  new places. These experiences can be incredibly enriching and
                  can stay with you for a lifetime.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ========= hero section end ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ======== Feature tour section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <SubTitle subtitle={"Explore"} />
              <h2 className="featured__tour-title"> Our featured tours</h2>
            </Col>
            <FeatureTourList />
          </Row>
        </Container>
      </section>
      {/* ======== Feature tour section end =========== */}

      {/* ======== Experience section start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <SubTitle subtitle={"Experience"} />

                <h2>
                  With our all experiences <br /> we will serve your
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Pariatur similique nostrum ducimus ipsum nesciunt dicta
                </p>
              </div>

              <div className="counter_wrapper d-flex align-items-center gap-5 ">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Year experinces</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ======== Experience section end ============= */}

      {/* ====== gallary section start ========= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImageGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ====== gallary section end ========= */}

      {/* ========== testimonial section start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <SubTitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonails />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ========== testimonial section end */}

      <Newsletter />
    </>
  );
};

export default Home;
