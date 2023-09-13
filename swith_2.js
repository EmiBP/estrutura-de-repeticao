/*Desenvolva um programa que receba como entrada um número inteiro que represente um dos 7 dias da semana e imprima na tela se esse dia é útil, final de semana ou inválido.
Considere que Domingo é o dia 1 e Sábado o dia 7. */

let dia = 11; 
switch(dia) {
    case 1: console.log("Domingo, final de semana"); break;
    case 2: console.log("Segunda, dia útil"); break;
    case 3: console.log("Terça, dia útil"); break;
    case 4: console.log("Quarta, dia útil"); break;
    case 5: console.log("Quinta, dia útil"); break;
    case 6: console.log("Sexta, dia útil"); break;
    case 7: console.log("Sabado, Final de semana"); break;
    default: console.log("invalido");

}

console.log("Fim")