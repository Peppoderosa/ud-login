import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { verifyRecover } from "../../utils/functions";
import jwt from "../../utils/JasonWebToken/jwt";
import "./styles.css";

export default function ModalPasswordRecover() {
  const [cpfR, setCpfR] = useState("");
  function handleSendModal() {
    const payload = {
      username: cpfR,
    };

    if (verifyRecover({ payload })) {
      jwt(payload);
    } else {
      alert("Erro");
    }
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
