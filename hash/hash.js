import { createHash } from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("Minha Senha"));

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log("Usuário Autenticado com sucesso!")
            return true
        }

        console.log("Usuário ou senha incorretos")
        return false
    }
}

const usuario = new Usuario("Diego", "minhasenha")

console.log(usuario)

usuario.autentica("Diego", "minhasenha")

usuario.autentica("Diego", "Minhasenha")