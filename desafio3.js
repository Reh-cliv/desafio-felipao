class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;

        switch (this.tipo.toLowerCase()){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken"
        }
        
    console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

let mago = new heroi("Mago", 40, "Mago")
let guerreiro = new heroi("Guerreiro", 23, "Guerreiro")
let monge = new heroi("Monge", 60, "Monge")
let ninja = new heroi("Ninja", 36, "Ninja")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()