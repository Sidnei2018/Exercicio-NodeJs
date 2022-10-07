var func = require('./funcao')
var readlineSync = require('readline-sync');

console.log("Programa para verificar idade válida de trabalho\n");
console.log("================================================\n");

var idade = readlineSync.question("Digite sua idade: ");

func.idadeValida(idade)