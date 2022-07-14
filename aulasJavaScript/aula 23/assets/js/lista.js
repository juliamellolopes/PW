function exemploListas(){
    vogais = ['a','e','i,','o','u'];
    console.log('original:', vogais);

    vogais.push('r');
    console.log('incluir:', vogais);

    vogais.pop();
    console.log('Remover:', vogais);

    vogais.unshift('Duvido');
    console.log('Incluir no inicio:', vogais);

    vogais.push(100);
    console.log('incluir:', vogais);

    vogais.shift();
    console.log('Remover o primeiro:',vogais);

    delete vogais[3];
    console.log(vogais); 

    vogais[3] = 'X';
    console.log(vogais); 

    let vog = vogais.slice(0,2);
    console.log(vog);

    const  todos = vogais.join(',');
    console.log(todos); 

    const arr1 = [1,2,3];
    const arr2 = [1,2,3];

    const arr12 = arr1.concat(arr2);
    console.log(arr12);

    const arr12_2 = [...arr1, ...arr2];
    console.log(arr12_2);

    const numeros = [10,36,2,5,7,8,9,45,23,12];

    const filtrado = numeros.filter((valor,indice,array) =>{
        return (valor > 10)
    });
    console.log(filtrado);
    
    /*const filtrado2 = numeros.filter((valor) =>  
    {
        return (valor < 10)
    });*/
    const filtrado2 = numeros.filter(valor =>  (valor < 10));
    console.log(filtrado2);

    const numerosMap = [10,36,2,5,7,8,9,45,23,12];
    console.log(numerosMap);

    const numerosMapAlterado = numerosMap.map( item => item * 2);
    console.log(numerosMapAlterado);


    const listaString = ['2','3','4','5'];
    let soma = 0;
    for (let index = 0; index < listaString.length; index++) {
        soma += listaString[index];
    }
    console.log('Soma:',soma);
    soma = 0;
    const listaNumeros = listaString.map(item => parseFloat(item));

    for (let index = 0; index < listaNumeros.length; index++) {
        soma += listaNumeros[index];
    }
    console.log('Soma:',soma);

    const numerosReduce = [10,36,2,5,7,8,9,45,23,12];
    const nreduce = numerosReduce.reduce((acumulador,valor,indice, array) => {
        acumulador += valor;
        return acumulador;
    });
    console.log(nreduce);
}