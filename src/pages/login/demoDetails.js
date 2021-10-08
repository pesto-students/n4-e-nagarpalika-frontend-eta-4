/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import classnames from "classnames";
import { Modal, Button, Table } from "react-bootstrap";

const Container = styled.div`
  position: fixed;
  right: 3%;
  bottom: 3%;
`;

const StyledButton = styled(Button)`
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.75) !important;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  justify-items: center;
`;

const StyledCell = styled.td`
  display: flex;
  justify-content: space-between;
`;

const CustomCell = ({ value, isPhoneNumber = false }) => {
  const [bool, setBool] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const show = () => {
    setBool(true);
  };

  const hide = () => {
    setBool(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [isClicked]);

  return (
    <StyledCell
      onClick={() => {
        navigator.clipboard.writeText(value);
        setIsClicked(true);
      }}
      onFocus={show}
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={hide}
    >
      {isPhoneNumber ? `+91 ${value} ` : `${value} `}
      <i
        className={classnames("bi", `bi-clipboard${isClicked ? "-check" : ""}`)}
        style={{
          visibility: bool ? "" : "hidden",
          color: isClicked ? "green" : "",
          fontSize: "20px",
        }}
      ></i>
    </StyledCell>
  );
};

function MyVerticallyCenteredModal(props) {
  const list = [
    { type: "ADMIN", phoneNumber: "9876543210", otp: "112233" },
    { type: "MANAGER DELHI", phoneNumber: "7008608810", otp: "310596" },
    { type: "MANAGER MUMBAI", phoneNumber: "9668264016", otp: "310596" },
    { type: "USER DELHI", phoneNumber: "1122334455", otp: "123456" },
  ];

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          DEMO Accounts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Phone Number</th>
              <th>Account Type</th>
              <th>OTP</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ type, phoneNumber, otp }, index) => {
              return (
                <tr key={phoneNumber}>
                  <td>{index + 1}</td>
                  <CustomCell value={phoneNumber} isPhoneNumber />
                  <td>{type}</td>
                  <CustomCell value={otp} />
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

const DemoDetails = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <StyledButton variant="info" onClick={() => setModalShow(true)}>
        <i
          className="bi bi-info-circle"
          style={{ fontSize: "1.2rem", margin: "2px" }}
        ></i>{" "}
        Demo Details
      </StyledButton>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default DemoDetails;
