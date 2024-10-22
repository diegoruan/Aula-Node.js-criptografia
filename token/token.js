import jwt from 'jsonwebtoken'

const chaveSecreta = "chaveSecreta"

const token = jwt.sign(
    {
        apelido: "Diego",
        curso: "segurança e node.js"
    }, chaveSecreta
)

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado);
