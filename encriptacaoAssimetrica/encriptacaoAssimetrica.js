import { generateKeyPairSync, publicEncrypt, privateDecrypt } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync("rsa",  {
    modulusLength: 2048,

    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
    },
});

//console.log(publicKey);
//console.log(privateKey);

// Enviando Informações

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem Secreta")
)

console.log(dadosCriptografados.toString("hex"))

// Recebendo Informações

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados: 
${dadosDecifrados}`)
