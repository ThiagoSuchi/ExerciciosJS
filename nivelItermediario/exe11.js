/* 11 - |___________________________|
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

const arrayAlunos = ['marcio', 'junior', 'marcos', 'robert', 'ariana', 'meghan', 'juceli', 'tifany', 'penina', 'denise', 'adriel'];
const arrayRespostas = ['bdeead', 'acbcce', 'abbade', 'abbade', 'abbade', 'babaca', 'adaadd', 'abcecb', 'aeedbc', 'bebebe', 'cabeca'];

const arrays = [arrayAlunos, arrayRespostas];
let alunoQueColou = 0;

for (i = 0; i < arrayAlunos.length; i++) {
    respostas = arrays[1][i]
    for (j = i + 1; j < arrayAlunos.length; j++) {
        if (arrays[1][j] === arrays[1][i]) {
            alunoQueColou = arrays[0][j]
            console.log(`aluno(a) ${alunoQueColou} \n -> COLOU na prova. Alternativas assinaladas: ${respostas}`);
            
        } 

    }
}






