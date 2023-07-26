# Mywalletfront
Bem-vindo ao MyWallet! Este é um projeto que permite que você gerencie suas finanças de forma simples e eficiente. Com ele, você poderá controlar suas receitas, despesas e obter uma visão geral do seu saldo atual.

Tecnologias Utilizadas
O MyWallet foi desenvolvido utilizando as seguintes tecnologias:

MongoDB: Banco de dados não relacional utilizado para armazenar as informações das transações e usuários de forma eficiente e escalável.

Express.js: Framework para construção de aplicações web em Node.js. Foi utilizado para criar as rotas da API e gerenciar as requisições do cliente.

Node.js: Ambiente de execução JavaScript server-side, usado como base para desenvolver a aplicação do lado do servidor.

React: Biblioteca JavaScript para construção de interfaces de usuário interativas. Utilizamos o React para criar a parte do cliente do MyWallet.

Styled Components: Biblioteca para estilização de componentes no React, permitindo criar uma aplicação com um design mais modular e fácil de manter.

Como Rodar o Projeto
Para rodar o MyWallet localmente em sua máquina, siga os passos abaixo:

Pré-requisitos
Node.js: Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em: https://nodejs.org/

MongoDB: É necessário ter o MongoDB instalado e em execução localmente ou acessível através de uma URL externa.

Passo 1: Clonar o repositório
Clone este repositório em um diretório de sua preferência utilizando o seguinte comando:


git clone https://github.com/seu_usuario/my-wallet.git
Passo 2: Instalar as dependências
Navegue para o diretório raiz do projeto e instale as dependências tanto para o servidor quanto para o cliente usando o npm (ou yarn):
  -cd my-wallet
  -npm install
  -cd client
  -npm install
Passo 3: Configurar o ambiente
Antes de executar o projeto, é necessário configurar as variáveis de ambiente. Para isso, crie um arquivo .env na raiz do diretório e defina as seguintes variáveis:

faça  um arquivo na pasta raiz chamado .envv
 Copy code
  MONGODB_URImongodb:\\127.0.0.1:27017/mywallet

Passo 4: Executar o servidor e o cliente

Após concluir as etapas anteriores, você está pronto para iniciar o servidor e o cliente. No diretório raiz do projeto, execute o seguinte comando para iniciar o servidor:
  -npm start

atenção certifique-se que a api mywallet-backend esta rodando !!  
Considerações Finais
O MyWallet é uma aplicação simples, mas pode ser expandida e aprimorada de diversas maneiras. Fique à vontade para fazer modificações, adicionar novas funcionalidades e contribuir com melhorias.

Agradecemos por utilizar o MyWallet e esperamos que seja útil para o gerenciamento de suas finanças! Em caso de dúvidas ou problemas, sinta-se à vontade para abrir uma issue no repositório ou entrar em contato com a equipe de desenvolvimento.

Divirta-se gerenciando suas finanças com o MyWallet!
