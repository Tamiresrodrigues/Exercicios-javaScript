function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (10 + imposto)}`
}
const produto = {
    nome:'Notebook', 
    preco: 4588,
    desc: 0.1,
    getPreco 
}

global.preco = 1000
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.18, '$'))