/** @format */

import React from "react";
import Form from "react-bootstrap/Form";

const DatepickerRange = () => {
  // const [dateRange, setDateRange] = useState([null, null]);
  // const [startDate, endDate] = dateRange;
  return (
    <div className="container">
      <Form.Control
        type="date"
        name="date"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};
export default DatepickerRange;
