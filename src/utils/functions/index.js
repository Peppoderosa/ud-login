function verifyLogin({ payload }) {
  if (payload.cpf === "" || payload.password === "") {
    return false;
  } else if (TestCPF(payload.username)) {
    return true;
  } else {
    return false;
  }
}

function verifyRecover({ payload }) {
  if (payload.username === "") {
    return false;
  } else if (TestCPF(payload.username)) {
    return true;
  } else {
    return false;
  }
}

function TestCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;
  var i;

  if (strCPF === "00000000000") return false;
  for (i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false;
  Soma = 0;
  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
export { verifyLogin, verifyRecover };
