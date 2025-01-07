class heroiAsh {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = ""; //variavel para armazenar o tipo de ataque

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "usou artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "usou shuriken";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new heroiAsh("Amy lee", 29, "mago");
heroi1.atacar(); // saída
