import React from "react";
import { Modal } from "react-bootstrap";

export default function Popup({ active, setActive }) {
  return (
    <>
      <Modal
        size="sm"
        show={active}
        onHide={() => setActive(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            We so sorry...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This position is closed now.</p>
          <p>But don't give up. We will open this position soon.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
