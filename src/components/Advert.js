import React from "react";
import Modal from "react-bootstrap/Modal";
import blackLogo from "../img/logos/rpe_black.png";

export default function Advert({ data, show, setShow }) {
  const handleSend = () => {
    window.open(`mailto:hr@rp-eng.com?subject=${data.title} CV&body=%20`);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="modal"
        key={data.id}
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal">
            <img className="logo-nav" src={blackLogo} alt="RPE Analytics"></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="align-center">{data.title}</h3>
          <p className="align-center">Location: {data.location}</p>
          <p>{data.description}</p>
          <h4>Responsibilities</h4>
          <ul>
            {data.responsibilities.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <h4>Requirements</h4>
          <ul>
            {data.skills.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <h4>We appreciate</h4>
          <ul>
            {data.extraSkills.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          <h4>Extra benefits</h4>
          <ul>
            {data.benefits.map((d) => (
              <li>{d}</li>
            ))}
          </ul>

          <p className="align-center">
            If you are interested, send your CV via the apply button.
          </p>
        </Modal.Body>
        <div className="send-cv-wrapper">
          <button id="send-cv" onClick={handleSend}>
            Apply
          </button>
        </div>
      </Modal>
    </>
  );
}
