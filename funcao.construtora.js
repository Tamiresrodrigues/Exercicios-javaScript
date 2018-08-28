function carro (velocidadeMaxima = 200, delta = 10) {
    //atributoprivado
    let velocidadeAtual = 0

    //metedoPublico

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta 
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }


//metedoPublico 

this.getVelocidadeAtual = function () {
    return velocidadeAtual
}
}

const uno = new carro 
uno.acelerar()
uno.acelerar()
uno.acelerar() 
console.log(uno.getVelocidadeAtual())


const ferrari = new carro (350 , 40)

ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())


