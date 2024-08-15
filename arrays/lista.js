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
const notas = [10, 8.5, 5, 6.5, 8, 7.5];

for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
}
