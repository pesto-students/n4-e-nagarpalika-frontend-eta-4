/** @format */

import React from "react";

import ProgressBar from "./progressBar";
import ImageSlider from "./imageSlider";

import {
  GrievanceContainer,
  DivHead,
  GrievanceBody,
  GrievanceImage,
  PGrievance,
  Header,
  AGrievance,
  Text,
  TakeActionButton,
  GrievanceTextInput,
  ButtonPost,
} from "./styles";

const ViewGrievance = () => {
  const grievanceData = {
    title: "Traffic Lights near HSR Layout 3rd cross not working",
    details:
      "I would Like to Bring it to your notice that, Traffic Lights near HSR Layout 3rd cross not working despite multiple road acctdents.",
    createdAt: "21st June 2021 07:23 PM",
    latLong: [20.298358699999998, 85.8629813],
    status: 2,
    tag: "Road Safety and Traffic",
  };

  const updateStatus = (e) => {
    e.preventDefault();
  };
  const handleClick = (e) => {
    e.preventDefault();
    const link = `https://maps.google.com/?q=${grievanceData.latLong[0]},${grievanceData.latLong[1]}`;
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <GrievanceContainer>
      <DivHead>
        <GrievanceBody>
          <GrievanceImage>
            <ImageSlider />
            <ProgressBar />
            <PGrievance>{grievanceData.tag}</PGrievance>
          </GrievanceImage>
          <GrievanceImage>
            <Header>{grievanceData.title}</Header>
            {/* eslint-disable-next-line */}
            <AGrievance onClick={handleClick} href="#">
              Location
            </AGrievance>
            <Text>Created: {grievanceData.createdAt}</Text>
            <Text>{grievanceData.details}</Text>
            <TakeActionButton onClick={updateStatus}>
              Take Action
            </TakeActionButton>
          </GrievanceImage>
        </GrievanceBody>
        <GrievanceBody>
          <Text />
          <Text>This is a comment</Text>
        </GrievanceBody>
        <GrievanceBody>
          <GrievanceTextInput />
          <ButtonPost>Post</ButtonPost>
        </GrievanceBody>
      </DivHead>
    </GrievanceContainer>
  );
};

export default ViewGrievance;
