
let pularLinha = ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::"
//  Crie uma variável para armazenar seu nome completo
let meuNome = 'wellington carlos da silva leite';
console.log(meuNome)
console.log(pularLinha)

// Crie uma variável para armazenar se você gosta de programar (true ou false)
let programar = true;
console.log(programar)
console.log(pularLinha)

/* Dadas as operações matemáticas abaixo, calcule-as utilizando Javascript, para cada número utilizar uma variável

//2 + (3 x 4) - 5

//2 x (3 + 4) - 5 ÷ 5

//{[(10 - 4) / 2] * 3} + 1

//3 * 4 / 2 + 1 - 5*/

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(n[1] + (n[2] * n[3]) - n[4]);

console.log(pularLinha)

console.log(n[1] * (n[2] + n[3]) - n[4] / n[4]);

console.log(pularLinha)

console.log(([(n[9] - n[3]) / n[1]] * n[2]) + n[0])

console.log(pularLinha)

console.log(n[2] * n[3] / n[1] + n[0] - n[4])
console.log(pularLinha)

// Crie um poema utilizando interpolação para inserir variáveis em diferentes linhas
let frase = 'boa'
let frase2 = 'ruim'
let frase3 = 'notícia'

console.log(pularLinha)

console.log(`Tenho uma ${frase3} ${frase} e uma ${frase2} pra te dar
A ${frase2} é que não tem ${frase3} ${frase}
E a ${frase} é que não tem ${frase3} ${frase2}.`)

console.log(pularLinha)

// Crie um programa que exiba a data atual formatada utilizando interpolação
let data = new Date()

console.log(data)

console.log(pularLinha)

let dia = new Date()
let d = dia.getDate()
console.log(d)

console.log(pularLinha)

let mes = new Date()
let m = mes.getMonth() + 1
console.log(m)

console.log(pularLinha)

let ano = new Date()
a = ano.getFullYear()
console.log(a)
console.log(pularLinha)
console.log(`A data e hora de hoje é ${data}`)

console.log(pularLinha)

// Crie um programa que calcule a área de um retângulo, solicitando a base e a altura ao usuário. Exiba o resultado utilizando interpolação

// let nu = parseInt(prompt('digite a base'))
// let nu2 = parseInt(prompt('digite a altura'))
// let nu3 = nu*nu2


// console.log(`a area desse retângulo é ${nu3}`)

// Crie uma condicional para verificar se o caractere é uma vogal
function vogal(letra) {
    
    letra = letra.toLowerCase();
    
    
    if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
      return true;
    } else {
      return false;
    }
  }
  
  
  console.log(vogal('a')); 
  console.log(vogal('b')); 
console.log(pularLinha)


//   /Crie uma condicional para verificar se o número é par ou é impar
  function ParImpar(n1){

    if(n1%2==1){
        console.log("impar")
    }else{
        console.log('par')
    }

  }

 ParImpar(56)
 ParImpar(2241)
 ParImpar(366)
 ParImpar(45)

 console.log(pularLinha)

//  Crie uma condicional if else if else para verificar se um triângulo é equilátero, isósceles ou escaleno:

 let t1 = 5;
let t2 = 5;
let t3 = 5;

if (t1 === t2 && t2 === t3) {
  console.log("O triângulo é equilátero.");
} else if (t1 === t2 || t1 === t3 || t2 === t3) {
  console.log("O triângulo é isósceles.");
} else {
  console.log("O triângulo é escaleno.")}

  console.log(pularLinha)

//   Calcule a média do aluno e verifique se ele foi aprovado

  function Media(p1,p2,p3){
     let resultado = null
     resultado = (p1 + p2 + p3) / 3

     if(resultado >= 6){
        console.log(`sua média é ${resultado} e você está aprovado`)
     }else{
        console.log(`sua média é ${resultado} e você está reprovado`)
     }
  }

  Media(5,6,8)

  console.log(pularLinha)

//   Crie uma variável para armazenar um array com seus hobbies

  let hobbies = ['tocar viola','ouvir moda de viola','assistir séries','passear']

  console.log(hobbies)
  
  console.log(pularLinha)

/*Crie um array chamado frutas com os nomes de 5 frutas diferentes.
Acesse e imprima o segundo elemento do array.
Adicione mais duas frutas ao final do array.
Remova a primeira fruta do array.*/

  const frutas = ['pêra', 'maçã','pitomba','jaca','siriguela']

  console.log(frutas[1])

  frutas.push('graviola', 'abacaxi')

  console.log(frutas)

  frutas.shift()

  console.log(frutas)

  /* 
Crie uma variável e atribua um valor de qualquer tipo (número, string, booleano).
Utilize o operador typeof para verificar o tipo da variável.
Imprima o tipo da variável no console.
*/
  let tipo = 'j'

  console.log(typeof(tipo))


 
  
