// let numero1 = Number(prompt('Digite um número:'));

// let numero2 = Number(prompt('Digite mais um número'));

// console.log(numero1 + numero2);


let nome = prompt ('Digite o seu nome:')

let salario = Number(prompt(`Olá, ${nome}! Agora digite seu salário`));

let aumento = salario * 0.2;

let novo_salario = aumento;

console.log(`O seu salário que é de R$${salario.toFixed(2)} terá um  aumento de 20% ou ${aumento.toFixed(2)}, ficando: R$${novo_salario.toFixed(2)}`) 
