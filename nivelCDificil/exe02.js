/* 02 - Desenvolva um programa que simule um sistema de validação de senhas. O programa deve
conter uma lista de senhas fictícias e verificar se a senha fornecida pelo usuário corresponde a
uma das senhas da lista. Crie uma lista contendo o cadastro de 10 usuários fictícios. Os usuários deverão ter um email e
uma senha, bem como informações adicionais como nome entre outras que desejar. As senhas
devem ser diferentes entre si e não devem ser senhas reais para garantir a segurança */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const listaLogin = [
    ['Alice Silva', 'alice.silva@example.com', 'senha123'],
    ['Bruno Costa', 'bruno.costa@example.com', '123456'],
    ['Carla Oliveira', 'carla.oliveira@example.com', 'abcdef'],
    ['Daniel Souza', 'daniel.souza@example.com', 'qwerty'],
    ['Elisa Mendes', 'elisa.mendes@example.com', 'password1'],
    ['Fabio Lima', 'fabio.lima@example.com', '123abc'],
    ['Gabriela Rocha', 'gabriela.rocha@example.com', '654321'],
    ['Henrique Dias', 'henrique.dias@example.com', 'passw0rd'],
    ['Isabel Teixeira', 'isabel.teixeira@example.com', 'senha321'],
    ['João Almeida', 'joao.almeida@example.com', 'abc123']
]

rl.question('Digite seu email: ', (argEmail) => {
    rl.question('Digite sua senha: ', (argSenha) =>{
        for(let index in listaLogin) {
            if(listaLogin[index][1] !== argEmail && listaLogin[index][2] !== argSenha){
                console.log(`O email e senha fornecidos não são válidos! Por favor tente novamente.`);
                break
            }

            if(listaLogin[index][1] == argEmail && listaLogin[index][2] == argSenha){
                let pessoa = listaLogin[index][0]
                console.log(`Óla ${pessoa}, bem vindo de volta!`);
                break
            }else if (listaLogin[index][1] !== argEmail && listaLogin[index][2] == argSenha){
                console.log(`Este email é inválido! Por favor tente outro email.`);
                break
            }else if (listaLogin[index][2] !== argSenha && listaLogin[index][1] == argEmail){
                console.log(`A senha informada é inválida! Por favor tente novamente.`);
                break
            }
        }
    })
})