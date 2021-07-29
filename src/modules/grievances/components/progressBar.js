/** @format */

import React from "react";

import {
  DivHeadBar,
  DivBodyBar,
  StatusFour,
  StatusOne,
  StatusThree,
  StatusTwo,
  ProgressOne,
  ProgressTwo,
  ProgressThree,
  MessageOne,
  MessageTwo,
  MessageThree,
  MessageFour,
} from "./styles";

export default function ProgressBar() {
  return (
    <DivHeadBar>
      <DivBodyBar>
        <StatusOne />
        <ProgressOne />
        <StatusTwo />
        <ProgressTwo />
        <StatusThree />
        <ProgressThree />
        <StatusFour />
      </DivBodyBar>
      <DivBodyBar>
        <MessageOne>Created</MessageOne>
        <MessageTwo>Reviewed</MessageTwo>
        <MessageThree>Action Taken</MessageThree>
        <MessageFour>Resolved</MessageFour>
      </DivBodyBar>
    </DivHeadBar>
  );
}
