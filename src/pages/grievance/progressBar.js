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
        <StatusOne>1</StatusOne>
        <ProgressOne />
        <StatusTwo>2</StatusTwo>
        <ProgressTwo />
        <StatusThree>3</StatusThree>
        <ProgressThree />
        <StatusFour>4</StatusFour>
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
