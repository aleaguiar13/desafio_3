//1 - Criar um loop que conte de 1 até 10 usando FOR

//for(variavel; condição; iteração){
 //   console.log(variavel)}

for(let num = 1; num <= 10; num++){
console.log(num)
}//o num++ acrescenta um por um

//2 - Criar um loop que conte de 10 até 1 usando WHILE

//variavel nomedavariavel = valor inicial do loop
//while(condição){ tarefa iteração} essa é a estrutura do while

let contagem = 10

while(contagem >= 1){
    console.log(contagem)
    contagem--
}


//3 - Criar um loop que conte todos os números ímpares de 1 até 100

for(let i = 1; i<=100; i +=2){
    console.log(i)
}

//4- Criar um loop que conte todos os números pares de 0 a 100

let number = 0

while (number <= 100){
    console.log(number)
    number +=2
}