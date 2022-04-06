import React, { Component } from "react";
import { Col, Row, Image, Title } from "../../../components/common";
import { TextStyled, ButtonStyled } from "./Features.styled";
class Features extends Component {
  render() {
    return (
      <Row className="pd-top-bottom-50">
        <Col col="6" className="pd-50">
          <Title>
            Effortlessly crop out any unwanted parts and highlight with the
            photo cropper
          </Title>
          <TextStyled large>
            Did happen to snap a shot where there was more than what you wanted
            in it? How are going to fix it? Cropping an image is a great way to
            cut out anything unwanted, so you can control the image composition
            as you need to and add an amazing perspective. With Fotor's Photo
            Cropper, you can choose what size to chop it down to and instantly
            edit in the perspective you want or remove anything unwanted by
            dragging any of the corners on the box that appears over your
            uploaded image, changing your image's orientation after a few
            clicks.
          </TextStyled>
          <ButtonStyled>Read More</ButtonStyled>
        </Col>
        <Col col="6" removePadding>
          <Image src="https://imgv3.fotor.com/images/side/easily-crop-photos-with-Fotor_2021-07-01-025613.png" />
        </Col>
      </Row>
    );
  }
}

export default Features;
