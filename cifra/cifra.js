const mensagemSecreta = "Minha mensagem secreta";

function cifrar(mensagem, movimentos) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);
        if (codLetraAscii >= 65 && codLetraAscii <+ 90) {
            let calculoMovimento = ((codLetraAscii - 65 + movimentos) % 26) + 65;
            resultado += String.fromCharCode(calculoMovimento);
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
            let calculoMovimento = ((codLetraAscii - 97 + movimentos) % 26) + 97;
            resultado += String.fromCharCode(calculoMovimento);
        } else {
            resultado += String.fromCharCode(codLetraAscii)
        }
    }

    return resultado;
}

const mensagemCrifrada = cifrar(mensagemSecreta, 5)
console.log(mensagemCrifrada);


function decifrar(mensagem, movimentos) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);
        if (codLetraAscii >= 65 && codLetraAscii <+ 90) {
            let calculoMovimento = ((codLetraAscii - 65 - movimentos) % 26) + 65;
            resultado += String.fromCharCode(calculoMovimento);
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
            let calculoMovimento = ((codLetraAscii - 97 - movimentos) % 26) + 97;
            resultado += String.fromCharCode(calculoMovimento);
        } else {
            resultado += String.fromCharCode(codLetraAscii)
        }
    }

    return resultado;
}

console.log(decifrar(mensagemCrifrada, 5))