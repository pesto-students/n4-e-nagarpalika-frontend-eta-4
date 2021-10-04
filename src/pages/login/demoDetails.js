/** @format */

import React from "react";
import styled from "styled-components";
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

function MyVerticallyCenteredModal(props) {
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
            <tr>
              <td>1</td>
              <td>+91 98765 43210</td>
              <td>ADMIN</td>
              <td>112233</td>
            </tr>
            <tr>
              <td>2</td>
              <td>+91 70086 08810</td>
              <td>MANAGER DELHI</td>
              <td>310596</td>
            </tr>
            <tr>
              <td>3</td>
              <td>+91 96682 64016</td>
              <td>MANAGER MUMBAI</td>
              <td>310596</td>
            </tr>
            <tr>
              <td>4</td>
              <td>+91 11 2233 4455</td>
              <td>USER DELHI</td>
              <td>123456</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

const DemoDetails = () => {
  const [modalShow, setModalShow] = React.useState(false);

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
