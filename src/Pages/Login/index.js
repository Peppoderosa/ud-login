import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

//components
import PasswordModal from "../../components/ModalPasswordRecover";
//JasonWebToken
import jwt from "../../utils/JasonWebToken/jwt";
//utils
import { verifyLogin } from "../../utils/functions";
import api from "../..//utils/API/axios";
//css
import "./styles.css";

export default function Login() {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      username: cpf,
      password,
    };
    if (verifyLogin({ payload })) {
      const data = jwt(payload);
      let config = {
        headers: {
          Authorization: Bearer + data,
        },
      };
      const response = await api.post("/session", data, config);
      console.log("reponse");
    } else {
      alert("Erro");
    }

    setCpf("");
    setPassword("");
  }
  return (
    <>
      <div className="content">
        <div className="bartop">
          <strong>UFAL</strong>
        </div>
        <form action="submit">
          <label htmlFor="text">CPF:</label>
          <input
            placeholder="Digite seu CPF"
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
          <Button variant="link" onClick={() => handleShow()}>
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
          <PasswordModal handleSClose={handleClose}></PasswordModal>
        </Modal>
      </div>
    </>
  );
}
