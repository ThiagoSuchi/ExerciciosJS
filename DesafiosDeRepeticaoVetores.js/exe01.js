/* 01 - |___________________________|
        | Nome  | Questões Marcadas |
        |_______|___________________|
        |marcio |     bdeead        |
        |junior |     acbcce        | 
        |marcos |     abbade        |      
        |robert |     abbade        | 
        |ariana |     abbade        | 
        |meghan |     babaca        | 
        |juceli |     adaadd        | 
        |tifany |     abcecb        | 
        |penina |     aeedbc        |  
        |denise |     bebebe        | 
        |adriel |     cabeca        | 
        |_______|___________________|
    Faça um programa que, analisando a tabela acima, escreva um por linha a relação dos alunos
que possivelmente colaram, isto é, aqueles que suas respostas são idênticas a pelo menos
algum outro aluno, não importa qual ocorrência foi encontrada a correspondência das
respostas, apenas escreva a lista dos nomes. */


const alunos = ['marcio', 'junior', 'marcos', 'robert', 'ariana', 'meghan', 'juceli', 'tifany', 'penina', 'denise', 'adriel'];
const respostas = ['bdeead', 'acbcce', 'abbade', 'abbade', 'abbade', 'babaca', 'abbade', 'abcecb', 'aeedbc', 'bbbbbb', 'abbade'];

let alunoQueColou = [];


for (i = 0; i < respostas.length; i++) {
    for (j = 0; j < respostas.length; j++) {
        if (alunos[j] !== alunos[i] && respostas[j] === respostas[i]) {
            alunoQueColou.push(alunos[i])
            break
        }
    }
}
console.log(alunoQueColou);




// const alunos = ['marcio', 'junior', 'marcos', 'robert', 'ariana', 'meghan', 'juceli', 'tifany', 'penina', 'denise', 'adriel'];
// const respostas = ['bdeead', 'acbcce', 'abbade', 'abbade', 'abbade', 'babaca', 'abbade', 'abcecb', 'aeedbc', 'abbade', 'cabeca'];
// const colaram = [];

// const notasAlunos = alunos.reduce((obj, aluno, index) => {
//     obj[aluno] = respostas[index]
//     return obj
// }, {})



// for (const aluno in notasAlunos) {
//     for (const alunoVerificado in notasAlunos) {
//         if (aluno !== alunoVerificado && notasAlunos[aluno] === notasAlunos[alunoVerificado]) {
//             if (!colaram.includes(aluno)) {
//                 colaram.push(aluno);
//             }
//             break;
//         }
//     }
// }
// console.log(colaram);







