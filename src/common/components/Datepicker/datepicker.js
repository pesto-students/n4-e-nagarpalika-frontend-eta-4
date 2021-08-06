/** @format */

import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const DatepickerRange = ({ date, setDate }) => {
  const onChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div className="container">
      <Form.Control type="date" name="date" value={date} onChange={onChange} />
    </div>
  );
};

DatepickerRange.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DatepickerRange;
