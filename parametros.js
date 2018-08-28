function area(largura, altura) {
    const area = largura * altura  
    if(area > 20)  {
        console.log(`valor acima do permitido: ${area}m2.`)
    } else {
        return (area <20 )
        console.log(`tente novamente: ${area}`)
    }
}
console.log(area(10, 10))  
console.log(area(2))
console.log(area())