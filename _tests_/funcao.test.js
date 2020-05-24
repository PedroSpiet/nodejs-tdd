// é importante colocar .test para o jest achar nossos test

function soma(a,b) {
    return a + b
}

//Verifica se 5+5 é 10
test('5+5 deve ser 10', () => {
    expect(soma(5,5)).toBe(10)
})



/*
*Nas aspas simples, colocamos nossa demanda, ou seja, oque nós queremos testar
* expect() é a nossa expectativa do que deve ser retornado
* passando uma função dentro do expect com parametros para serem testados
* ToBe colocamos o valor que deve ser retornado para dar success
*
*/