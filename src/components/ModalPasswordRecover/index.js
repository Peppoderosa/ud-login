import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./styles.css";

export default function ModalPasswordRecover(handleSendModal) {
  const [cpfR, setCpfR] = useState("");
  function handleSendModal() {
    console.log(cpfR);
    setCpfR("");
  }

  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Recuperação de senha</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="contentModal">
          <label htmlFor="text">CPF:</label>
          <input
            type="text"
            placeholder="Digite seu CPF"
            value={cpfR}
            onChange={(e) => setCpfR(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => handleSendModal()}>
          Enviar
        </Button>
      </Modal.Footer>
    </div>
  );
}
