import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

export default function ModalPasswordRecover({ show, setShow, handleClose }) {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Recuperação de senha</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="content">
          <label htmlFor="text">CPF:</label>
          <input type="text" placeholder="Digite seu CPF" />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
}
