function idadeValida(numero){

    if(numero < 18 || numero > 65){
        throw new Error('Idade fora dos padrões de aceitação!')
    }

    else { console.log("A idade " + numero + " é válida!");}

    return numero;
}

try { console.log('Idade valida entre 18 e 65 anos.\n')}

catch (err) { console.log(err.message);}

module.exports = {idadeValida}