/** @format */

import React, { useEffect, useState } from "react";

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
import { GRIEVANCE_STATUS } from "../../../common/contants";

export default function ProgressBar({ issueStatus }) {
  const [statusTwo, setStatusTwo] = useState(false);
  const [statusThree, setStatusThree] = useState(false);
  const [statusFour, setStatusFour] = useState(false);

  useEffect(() => {
    if (issueStatus === GRIEVANCE_STATUS.review) {
      setStatusTwo(true);
    }
    if (issueStatus === GRIEVANCE_STATUS.action) {
      setStatusTwo(true);
      setStatusThree(true);
    }
    if (issueStatus === GRIEVANCE_STATUS.resolved) {
      setStatusTwo(true);
      setStatusThree(true);
      setStatusFour(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [issueStatus]);

  return (
    <DivHeadBar>
      <DivBodyBar>
        <StatusOne />
        {statusTwo ? <ProgressOne statusTwo /> : <ProgressOne />}
        {statusTwo ? <StatusTwo statusTwo /> : <StatusTwo />}
        {statusThree ? <ProgressTwo statusThree /> : <ProgressTwo />}
        {statusThree ? <StatusThree statusThree /> : <StatusThree />}
        {statusFour ? <ProgressThree statusFour /> : <ProgressThree />}
        {statusFour ? <StatusFour statusFour /> : <StatusFour />}
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
