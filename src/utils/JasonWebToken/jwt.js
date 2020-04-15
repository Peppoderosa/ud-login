import jwt from "jsonwebtoken";

import Secret from "./secret";

export default function jwtEncode(payload) {
  var token = jwt.sign(payload, Secret);
  return token;
}
