# Projeto Serverless

## Objetivo 

O objetivo deste projeto é satisfazer todos os requisitos abaixo.

O desafio que propomos é provisionar uma infraestrutura na AWS, em que se tenha uma lambda que sejá capaz de registrar em um banco de dados relacional ou não relacional, dados sobre funcionários de uma empresa.


 1. Utilizar Clean Architectute
 2. Seu desafio precisa estar versionado no Github, em um repositório público.
 3. Documentação é primordial e vamos nos guiar por ela ;)
 4. Um funcionário deve possuir como atributos : Id , Idade , Nome e Cargo<br/>
 5. Salvar as informações necessárias em um banco de dados relacional ou não relacional de sua escolha dentro de uma infraestrutura AWS<br/>
 6. Será necessário que a Lambda consiga consultar, deletar e atualizar um funcionário e que ele esteja acessível via internet.<br/>
 7. Os recuros podem ser provisionados por serveless framework ou terraform.
 8. Realizar testes unitário com JEST.

## Limitações Pessoais

 - Atualmente meu conhecimento de lambda é quase que totalmente teórico excluindo algumas movimentações simples no painel da aws.
 - Não tenho conhecimento sobre terraform/serverless-framework


## Rodando o projeto

- Se deseja rodar o projeto localmente, você precisa do node e do docker instalado na sua maquina.
- É necessario subir o banco com ``` compose up --build ```
- Depois rode o comando ```npm i```
- Para iniciar a aplicação em modo de desenvolvimento  ```npm run dev```
- Se deseja buildar e iniciar a aplicação utilize ```npm run build ``` e ```npm run start```


## Endpoints

Os endpoints seguem o padrão restful de desenvolvimento, existe duas rotas principais o "health-check" apenas validando conexão com o banco e o "users" para fazer todas as interações com a entidade de usuarios.

## Teste

Para rodar os testes não é necessário subir o banco de dados, os testes unitários foram desenvolvidos em cima dos casos de uso, utilizando banco de dados em memoria.

- ```npm run test``` para executar a suit de testes da aplicação.

 ## Observações

 Diferente do solicitado desenvolvi uma api em node com ts passando por todas as etapas do desenvolvimento de software, definição de arquitetura / entidades / casos de uso e testes.
 A ideia era manter o uso de desenvolvimento de api e utilizando a lib [express-serverless](https://github.com/vendia/serverless-express) que facilitaria a conexão com a aws com as devidas funções.
 No entanto eu precisaria provisionar toda a estrutura da aws com terraform que é algo totalmente desconhecido pra mim, sendo mencionado apenas por pessoas de devops mas nunca precisei abranger tal area. O que pude fazer foi apenas estudar e entender se era possivel aplicar dentro do curto tempo que tinha e infelizmente não consegui aplicar da maneira que eu queria para a finalização do projeto.

 ## Agradecimentos

 Você pode achar um pouco cliche mas estou realmente feliz com o desenvolvimento deste projeto, a tempos não era apresentado a uma nova ferramenta que auxiliava tanta coisa como terraform. A utilização de infraestrutura como código foi algo de outro mundo pra mim, sempre achei que conteinerização e orquestração dos containers era tudo que precisava para provisionar minhas aplicações mas saber que consigo criar além da estrutura, provisionar o build da aplicação, a limitação de recursos para maquinas enfim realmente um mundo novo para mim como desenvolvedor.

 Irei continuar o desenvolvimento na branch iac/terraform mas a entrega será feita na data marcada.
