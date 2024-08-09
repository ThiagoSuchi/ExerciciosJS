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

//const arrayAlunos = ['marcio', 'junior', 'marcos', 'robert', 'ariana', 'meghan', 'juceli', 'tifany', 'penina', 'denise', 'adriel'];
//const arrayRespostas = ['bdeead', 'acbcce', 'abbade', 'abbade', 'abbade', 'babaca', 'abbade', 'abcecb', 'aeedbc', 'bebebe', 'cabeca'];

const array = [
    ['marcio', 'bdeead'],
    ['junior', 'acbcce'],
    ['marcos', 'abbade'],
    ['robert', 'abbade'],
    ['ariana', 'abbade'],
    ['meghan', 'babaca'],
    ['juceli', 'abbade'],
    ['tifany', 'abcecb'],
    ['penina', 'aeedbc'],
    ['denise', 'bebebe'],
    ['adriel', 'cabeca']
  ]

//const arrays = [arrayAlunos, arrayRespostas];
let alunoQueColou = [];

for (atual = 0; atual < array.length; atual++) {
    console.log(atual, array[atual]);
    for (outro = 0; outro < array.length; outro++) {
        console.log("  "+outro, array[outro]);
    }
}


/*for (i = 0; i < arrayRespostas.length; i++) {
    if (arrayRespostas[i - 1] === arrayRespostas[i]) {
        alunoQueColou.push(arrayAlunos[i - 1])
        if (alunoQueColou.includes(arrayAlunos[i - 1])) {
            if (arrayRespostas[i] === arrayRespostas[i - 1]) {
                alunoQueColou.push(arrayAlunos[i])
                
            }
        }
    }
}*/



console.log(alunoQueColou);







