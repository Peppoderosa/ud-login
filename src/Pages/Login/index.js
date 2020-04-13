import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

//components
import PasswordModal from "../../components/ModalPasswordRecover";

import "./styles.css";

export default function Login() {
  const ref = React.createRef();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(cpf, password);
    setCpf("");
    setPassword("");
  }
  return (
    <div className="container">
      <form action="submit">
        <label htmlFor="text">CPF:</label>
        <input
          placeholder="Digite seu cpf"
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
          Entrar
        </Button>
        <Button variant="link" onClick={handleShow}>
          Esqueceu a senha?
        </Button>
      </form>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <PasswordModal handleClose={handleClose}></PasswordModal>
      </Modal>
    </div>
  );
}
