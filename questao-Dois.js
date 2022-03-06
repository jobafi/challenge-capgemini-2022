function carregarArray() {
    let n = 0;
    let string = '';
    let array = [];
    n = [3, 5, 7, 9, 11];
    array = string.split(',');

    /*
    if(array.length === 1) {
        // alert('Preencha a lista!');
        return;
    }
    */

    for(let i = 0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
        // console.log(array);
    }

    array.short((a, b) => a - b) // colocando a Matriz em ordem.
    array.reverse(); // inverte
    let arrayUnico = [...new Set(array)]; // retirando os argumentos repetidos da Matriz.

    verificarPares(n, arrayUnico);
    }

    function verificarPares(n, arr) {
        let novoArray = [];
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length; j++) {
                if(arr[i] - arr[j] == n) {
                    novoArray.push(arr[i]);
                    novoArray.push(arr[j]);
                }
            }
        }
        separarPares(novoArray);
        console.log(novoArray);
    }

    function separarPares(arr) {
        let paresArray = [];
        for(let i = 0; i <= arr.length; i++) {
            paresArray[i] = arr.splice(0, 2);
        }
        exibirPares(paresArray);
    }

    function exibirPares(arr) {
        let string = '';
        for(let i = 0; i < arr.length; i++) {
            string += '[' + ' ' + arr[i] + ' ' + ']';
        }
        console.log(string);
    }