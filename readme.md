### Autor: Pedro Henrique Brito Obara

Olá! Seja bem vindo ;)

## Front-web

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## Backend:

## FlaskApp

Este repositório contém um exemplo de APIs REST com Flask e Python utilizado SQL Server para armazenameto de dados

### Utilize os comandos abaixo para executar a aplicação:

```shell
git clone https://github.com/Brabodopedro/Teste-Pratico-Python-Verzel
cd backend
git checkout almost_perfect
virtualenv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Como executar essa aplicação?
```shell
python run.py
# ou se quiser alterar a instancia de configuraçṍes
python run.py production
```

4. A aplicação deverá estar disponivel em seu navegador no endereço: http://localhost:5000/swagger

![GitHub Logo](/img/Capturar.png)

### Extensões recomendadas para desenvolvimento no VSCODE

- Python from Microsoft
- Python Docstring Generator from  Nils Werner
- Pyright from  ms-pyright

## Projeto e Conteúdo

Flask é um micro framework da web escrito em Python. É classificado como uma Microframework porque não requer ferramentas ou bibliotecas específicas. Não possui camada de abstração de banco de dados, validação de formulário ou qualquer outro componente em que bibliotecas de terceiros pré-existentes forneçam funções comuns. No entanto, o Flask suporta extensões que podem adicionar recursos de aplicativos como se fossem implementados no próprio Flask. Existem extensões para mapeadores objeto-relacionais, validação de formulários, manipulação de upload, várias tecnologias de autenticação aberta e várias ferramentas comuns relacionadas à estrutura. As extensões são atualizadas pela comunidade com muita frequência.

## JWT
O JWT (JSON Web Token) nada mais é que um padrão (RFC-7519) de mercado que define como transmitir e armazenar objetos JSON de forma simples, compacta e segura entre diferentes aplicações, muito utilizado para validar serviços em Web Services pois os dados contidos no token gerado pode ser validado a qualquer momento uma vez que ele é assinado digitalmente.

JSON Web Tokens (JWT) é um padrão stateless porque o servidor autorizador não precisa manter nenhum estado; o próprio token é sulficiente para verificar a autorização de um portador de token.

Os JWTs são assinados usando um algoritmo de assinatura digital (por exemplo, RSA) que não pode ser forjado. Por isso, qualquer pessoa que confie no certificado do assinante pode confiar com segurança que o JWT é autêntico. Não há necessidade de um servidor consultar o servidor emissor de token para confirmar sua autenticidade.

fonte: https://jwt.io/introduction/

## Testes unitários (unittest e coverage)

Teste de unidade é toda a aplicação de teste nas assinaturas de entrada e saída de um sistema. Consiste em validar dados válidos e inválidos via I/O (entrada/saída) sendo aplicado por desenvolvedores ou analistas de teste. Uma unidade é a menor parte testável de um programa de computador. Em programação procedural, uma unidade pode ser uma função individual ou um procedimento. Idealmente, cada teste de unidade é independente dos demais, o que possibilita ao programador testar cada módulo isoladamente.
O framework `unittest` foi originalmente inspirada por JUnit e tem semelhante com os principais frameworks de teste de unitários de outras linguagens. Ele suporta automação de teste, compartilhamento de configuração e código de desligamento para testes, agregação de testes em coleções e independência dos testes da estrutura de relatório.
O `Coverage.py` é uma ferramenta para medir a cobertura de código de programas Python. Ele monitora seu programa, observando quais partes do código foram executadas e, em seguida, analisa a fonte para identificar o código que poderia ter sido executado, mas não foi. A medição da cobertura é normalmente usada para avaliar a eficácia dos testes. Ele pode mostrar quais partes do seu código estão sendo exercitadas por testes e quais não estão.

