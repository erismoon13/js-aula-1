let nome = prompt (´Digite seu nome:´);

let nota1 = Number(prompt(`Digite a primeira nota:`))
let nota2 = Number(prompt(`Digite a segunda nota:`))
let nota3 = Number(prompt(`Digite a terceira nota:`))

let media = (nota1 + nota2 + nota3) / 3;

console.log(`Olá, ${nome}! sua média é: ${media.toFixed(2)}!`)

// let lado = Number(prompt(`Digite o lado do quadrado em metros:`))

// let area_quadrado  = lado ** 2;

// console.log(`A area do quadrado é: ${area_quadrado.toFixed(2)} metros.`)

// let numero1 = Number(prompt(`Digite um número`));
// let numero2 = Number(`Digite um número:`);

// if (numero1 > numero2) {
// console.log(`O número 1 ${número1} é maior que o número 2 ${numero2}`)
// } else if  (numero2 > numero1) {
// console.log (`O número 2 ${numero2} é maior que o número 1 ${numero1}`)
// }else {
// console.log(`Os dois números são iguais!`)
// }

if (media > = 8) {
console.log (`o aluno ${nome},foi APROVADO com a média ${média.toFixed(2)}`);
} else if (media > = 4) {
console.log(`O aluno{nome},esta de RECUPERAÇÂO com média ${media.toFoxed(2)}` );
} else {
    console.log(`O aluno ${nome}, foi  REPROVADO com a média ${media.toFixed(2)}`);
};


