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
    MessageFour} from './styles';


export default function ProgressBar() {
    return (<DivHeadBar>
        <DivBodyBar>
            <StatusOne>1</StatusOne>
            <ProgressOne/>
            <StatusTwo>2</StatusTwo>
            <ProgressTwo/>
            <StatusThree>3</StatusThree>
            <ProgressThree/>
            <StatusFour>4</StatusFour>
        </DivBodyBar>
        <DivBodyBar>
            <MessageOne className="message message-1">
                Created
            </MessageOne>
            <MessageTwo className="message message-2">Reviewed</MessageTwo>
            <MessageThree className="message message-3">Action Taken</MessageThree>
            <MessageFour className="message message-4">Resolved</MessageFour>
        </DivBodyBar>
    </DivHeadBar>);
}