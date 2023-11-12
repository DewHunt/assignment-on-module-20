"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-bootstrap/Carousel";
const Hero = (props) => {
  console.log("props.featured: ", props.featured);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container section-top">
      <div className="row">
        <div className="col-md-8 col-lg-8 col-sm-12 p-1 col-12">
          <Carousel
            id="carouselHero"
            activeIndex={index}
            onSelect={handleSelect}
            controls={false}>
            {props.sliders.map((item, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="w-100"
                    src={item["img1"]}
                    text="First slide"
                  />
                  <Carousel.Caption className="caption">
                    <Fade>
                      <h4>{item["title"]}</h4>
                      <p>{item["short_des"]}</p>
                    </Fade>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 p-1 col-6">
          <div id="Hero" className="card h-100">
            <img
              className="card-img-top w-100 rounded-2"
              src={props.featureds[0]?.img2}
            />
            <div className="card-img-overlay d-flex align-items-end">
              <div className="caption">
                <Fade>
                  <h4>{props.featureds[0]?.title}</h4>
                  <p>{props.featureds[0]?.shortDescription}</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
