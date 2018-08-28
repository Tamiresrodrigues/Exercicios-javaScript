function soma() {
    let soma = 8
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma 
}
console.log(soma())
console.log(soma(1,2,3))