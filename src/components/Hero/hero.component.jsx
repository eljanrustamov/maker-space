import React from "react";
import BAC from "../../assets/makerspace_bac.jpeg";
import { HeroComponent, ImageContainer, TextContainer } from "./hero.styles";

const Hero = () => {
  return (
    <HeroComponent>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <TextContainer>
              <h1>
                Maker Space, Baku American <span>Center</span>
              </h1>
              <p>
                A maker space is a collaborative work space inside a school,
                library or seperate public/private facility for making,
                learning, innovating, exploring and sharing that uses high tect
                to no tech tools. These spaces are open to kids, adults, and
                entrepreneurs and have a variety of maker equipment including 3D
                printers, robotics and media.
              </p>
            </TextContainer>
          </div>

          <div className="col-md-6 col-sm-12">
            <ImageContainer>
              <img src={BAC} alt="" />
            </ImageContainer>
          </div>
        </div>
      </div>
    </HeroComponent>
  );
};

export default Hero;
