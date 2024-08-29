
let pularLinha = ":::::::::::::::::::::::::::::::::::::::::::::::::::::::::"

let meuNome = 'wellington carlos';
console.log(meuNome)
console.log(pularLinha)
let programar = true;
console.log(programar)

console.log(pularLinha)

let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(n[1] + (n[2] * n[3]) - n[4]);

console.log(pularLinha)

console.log(n[1] * (n[2] + n[3]) - n[4] / n[4]);

console.log(pularLinha)

console.log(([(n[9] - n[3]) / n[1]] * n[2]) + n[0])

console.log(pularLinha)

console.log(n[2] * n[3] / n[1] + n[0] - n[4])

let frase = 'boa'
let frase2 = 'ruim'
let frase3 = 'notícia'

console.log(pularLinha)

console.log(`Tenho uma ${frase3} ${frase} e uma ${frase2} pra te dar
A ${frase2} é que não tem ${frase3} ${frase}
E a ${frase} é que não tem ${frase3} ${frase2}.`)

console.log(pularLinha)

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



// let nu = parseInt(prompt('digite a base'))
// let nu2 = parseInt(prompt('digite a altura'))
// let nu3 = nu*nu2


// console.log(`a area desse retângulo é ${nu3}`)

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

 
  
