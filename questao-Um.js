function captarMediana(numeros) {

    // testando os argumentos:
    if (!Array.isArray(numeros)) {
        throw TypeError('Os argumentos devem formar uma Matriz!');
    }

    // testando os números do Matriz:
    if (!numeros.every(e => typeof e === 'number')) {
        throw TypeError('Todos os elementos da Matriz devem ser números!');
    }

    // ordenando os elementos da Matriz e fornecendo uma Matriz ordenada:
    numeros = numeros.sort((x, y) => x - y);
    let metade = Math.floor(numeros.length / 2);

    return numeros.length % 2 == 1 ? numeros[metade] : (numeros[metade - 1] + numeros[metade + 2]) / 2; // retornando a Media, seja a Matriz IMPAR ou PAR.
}

// APLICANDO TESTES:
// "As declarações try...catch marcam um bloco de declarações para testar (try), e especifica uma resposta, caso uma exceção seja lançada."
try {
    console.log(captarMediana([5, 1, 8, 3, 11])); // mediana: 4.
} catch (e) {
    console.log(`Error: ${e.message}`);
}

// console.log();


try {
    console.log(captarMediana({a: 1})); 
} catch (e) {
    console.log(`Atenção: ${e.message}`);
}

// console.log();

try {
    console.log(captarMediana([5, 1, 8, 'a', 11])); 
} catch (e) {
    console.log(`Atenção: ${e.message}`);
}