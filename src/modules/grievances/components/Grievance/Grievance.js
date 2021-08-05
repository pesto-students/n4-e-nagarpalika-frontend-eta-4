/** @format */

import React from "react";

import Col from "../../../../common/components/Layout/Col";
import Container from "../../../../common/components/Layout/Container";
import Row from "../../../../common/components/Layout/Row";
import Carousel from "../../../../common/components/Carousel/Carousel1";
import Introduction from "./Introduction";
import Discussion from "./Discussion";

import AppLayoutContainerBackgroundImage from "../../../../assets/svg/AppLayoutContainerBackgroundImage.svg";

const GrievanceComponent = ({ account, issue }) => {
  const { id, images } = issue;

  return (
    <Container
      className={"flex-column "}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        minHeight: "calc(100vh)",
        backgroun: `grey url(${AppLayoutContainerBackgroundImage}) repeat fixed center`,
      }}
    >
      <Row className={"mt-2 mx-1"}>
        <Carousel
          id={`grievance-${id}`}
          items={images.map((url) => ({ url }))}
          buttonPrev
          buttonNext
        />
      </Row>
      <Row className={"my-1"}>
        <Col size={5} sm={12} md={12} lg={5} xl={5} xxl={5}>
          <Introduction {...issue} />
        </Col>
        <Col size={7} sm={12} md={12} lg={7} xl={7} xxl={7}>
          <Discussion {...{ account, ...issue }} />
        </Col>
      </Row>
    </Container>
  );
};

export default GrievanceComponent;
