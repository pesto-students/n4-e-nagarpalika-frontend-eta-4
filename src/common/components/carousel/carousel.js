/** @format */

import React from "react";
import Cards from "./cards/cards";

const Carousel = ({ issues, status, title }) => {
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
        id={`multi-card-issues-${status}`}
        className="carousel slide carousel-multi-item"
        data-ride="carousel"
      >
        <div className="controls">
          <a
            className="carousel-control-prev"
            href={`#multi-card-issues-${status}`}
            role="button"
            data-slide="prev"
          >
            <i className="fas fa-chevron-circle-left blue-color" />
          </a>
          <a
            className="carousel-control-next"
            href={`#multi-card-issues-${status}`}
            role="button"
            data-slide="next"
          >
            <i className="fas fa-chevron-circle-right blue-color" />
          </a>
        </div>
        <div className="carousel-inner position-relative" role="listbox">
          <div className="row mb-4">
            <div className="col">
              <h2 className="mb-0">{title}</h2>
            </div>
          </div>

          {window.screen.width > 775 ? (
            <div>
              <div className="carousel-item active">
                <Cards
                  content={issues[0].text}
                  image_url={issues[0].imageURL}
                  title={issues[0].title}
                  url={issues[0].url}
                />
              </div>
              <div className="carousel-item">
                {issues.slice(1).map((issue) => (
                  <Cards
                    content={issue.text}
                    image_url={issue.imageURL}
                    title={issue.title}
                    url={issue.url}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="carousel-item active">
                {issues.slice(0, 4).map((issue) => (
                  <Cards
                      content={issue.text}
                      image_url={issue.imageURL}
                      title={issue.title}
                      url={issue.url}
                  />
                ))}{" "}
              </div>
              <div className="carousel-item">
                {issues.slice(4).map((issue) => (
                  <Cards
                      content={issue.text}
                      image_url={issue.imageURL}
                      title={issue.title}
                      url={issue.url}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Carousel;
