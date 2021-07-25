/** @format */

import React from "react";
import classnames from "classnames";

import { I, ControlNext, ControlPrev} from './styles'
import Cards from "./cards/cards";

const Carousel = ({ issues, title }) => {
  // const [createdIssues, setCreatedIssues] = useState([]);
  // const [reviewedIssues, setReviewedIssues] = useState([]);
  // const [fixedIssues, setFixedIssues] = useState([]);
  // const [resolvedIssues, setResolvedIssues] = useState([]);
  // useEffect((issues) => {
  //   issues.map((issue) => {
  //     return issue.status === "CREATED"
  //       ? setCreatedIssues([issue, ...createdIssues])
  //       : issue.status === "REVIEWED"
  //       ? setReviewedIssues([issue, ...reviewedIssues])
  //       : issue.status === "FIXED"
  //       ? setFixedIssues([issue, ...fixedIssues])
  //       : setResolvedIssues([issue, ...resolvedIssues]);
  //   });
  // });
  return (
    <div className="container">
      <div
        id="multi-card-issues"
        className={classnames("carousel slide carousel-multi-item")}
        data-ride="carousel"
      >
        <div className="controls">
          <ControlPrev
            className={classnames("carousel-control-prev")}
            href="#multi-card-issues"
            role="button"
            data-slide="prev"
          >
            <I className={classnames("fas fa-chevron-circle-left")} />
          </ControlPrev>
          <ControlNext
            className={classnames("carousel-control-next")}
            href="#multi-card-issues"
            role="button"
            data-slide="next"
          >
            <I className={classnames("fas fa-chevron-circle-right")} />
          </ControlNext>
        </div>
        <div className={classnames("carousel-inner position-relative")} role="listbox">
          <div className={classnames("row mb-4")}>
            <div className="col">
              <h2 className="mb-0">{title}</h2>
            </div>
          </div>
              <div className={classnames("carousel-item active")}>
                {issues.slice(0, 4).map((issue) => (
                  <Cards key={issue.id}
                      content={issue.description}
                      image_url={issue.images[0]}
                      title={issue.title}
                      url={issue.url}
                  />
                ))}
              </div>
              <div className="carousel-item">
                {issues.slice(4).map((issue) => (
                  <Cards key={issue.id}
                      content={issue.description}
                      image_url={issue.images[0]}
                      title={issue.title}
                      url={issue.url}
                  />
                ))}
              </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
