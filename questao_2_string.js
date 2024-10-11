/* 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a 
quantidade de vezes em que ela ocorre.*/

const stringInformada = "Ame o que você faz, até que possa fazer o que ama"

let contador = 0

for(let i = 0; i < stringInformada.length; i++){
    let isA = stringInformada[i] === "A" || stringInformada[i] === 'a'

    if (isA){
        contador++;
    }
}

if(contador > 0){
    console.log(`A letra A/a está presente no texto fornecido, ela aparece ${contador} vez${contador > 1 ? "es": ""}`);
}else{
    console.log("A letra A/a não está presente no texto fornecido.");
}
