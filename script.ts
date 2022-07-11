interface IPessoa {
    nome: string,
    idade: number,
    profissao: string
}
let pessoa1: IPessoa = {
    nome: "Gabriel",
    idade: 17,
    profissao: "Programador"
}
let pessoa2: IPessoa = {
    nome: "Rafael",
    idade: 17,
    profissao: "Auxiliar Adiministrativo"
}
let pessoa3: IPessoa = {
    nome: "Felipe",
    idade: 25,
    profissao: "Presidente da Santa Rita"
}
let pessoa4: IPessoa = {
    nome: "Francisca",
    idade: 17,
    profissao: "Monitoramento"
}
console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);