const alunos = ["João", "Maria", "José", "Ana"];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibirNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    const [alunos, medias] = lista;

    const indice = lista.indexOf(aluno);
    const mediaAluno = lista[indice];
    console.log(`${aluno} tem a média ${mediaAluno}`);
  } else {
    console.log("Aluno não existe");
  }
}

exibirNomeENota("Ana");
exibirNomeENota("Eua");

let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);

// for clássico
// let indice = 0 : executa apenas uma vez
// indice < notas.length: condição da execução
// indice++: executada no final de um bloco

const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}

// Calculando média com for
// media for
const notasMedia = [10, 6.5, 8, 7.5];

let somaNotas = 0;

for (let index = 0; index < notasMedia.length; index++) {
  somaNotas += notasMedia[i];
}

const mediaNota = somaNotas / notasMedia.length;
console.log(`Media é ${mediaNota}`);

const notasM = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notasM.length; i++) {
  somaDasNotas += notasM[i];
}

const mediaM = somaDasNotas / notasM.length;

console.log(`A média das notas é ${mediaM}.`);

// for of
const numeros = [5, 8, 6, 10, 7];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;

console.log("A média dos números é:", media);
