# Projeto Talker Manager :man_office_worker:

## Contexto :selfie:

Neste projeto, foi desenvolvido uma API de um CRUD (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes. Alguns endpoints são capazes de ler e escrever em um arquivo, isso utilizando o módulo `fs`.


## Técnologias usadas :technologist:

Projeto desenvolvido em NodeJs, utilizando a biblioteca Express.

## Habilidades desenvolvidas

Neste projeto, desenvolvemos as seguintes habilidades:

- Realizar operações assíncronas utilizando callbacks;
- Realizar operações assíncronas utilizando Promises;
- Ler e escrever arquivos localmente com NodeJS;
- Escrever seus próprios scripts que criam e consomem Promises;
- Reescrever código que usa callbacks para que use Promises;
- Realizar chamadas de funções de forma consciente;
- Entender os conceitos básicos de como o JavaScript funciona;
- Detectar e solucionar problemas no código de forma mais objetiva;
- Entender a diferença entre execução síncrona e assíncrona;
- Entender o que é o HTTP, o que é uma API e o que os dois têm a ver com o Express;
- Escrever APIs utilizando Node e Express;
- Entender a estrutura de uma aplicação Express e como organizar seu código;
- Criar rotas e aplicar middlewares.

## Executando aplicação

1. Clone o repositório
  * `git clone git@github.com:LucasAccurcio/talker-manager.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd talker-manager`

2. Instalando os pacotes necessários:
  - `npm install`

3. Inicializando a API:
  - `npm run dev`

4. Utilize a extensão no VSCode "Thunder Client" ou instale o Postman em sua máquina.

5. Acesse um endpoint para verificar seu funcionamento:
  - Exemplo:
    > http://localhost:3000/talker
  
    > Esse endpoint irá retornar a lista das pessoas palestrantes, constante no arquivo talker.json utilizado nesse projeto.
