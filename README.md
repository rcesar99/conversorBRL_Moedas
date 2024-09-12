
# Conversor de Moedas (BRL)

Este é um projeto simples de conversor de moedas, desenvolvido em React.js, que permite a conversão do Real Brasileiro (BRL) para 10 das principais moedas mundiais e duas das principais moedas digitais (Bitcoin e Ethereum). O projeto utiliza a AwesomeAPI para obter as taxas de câmbio atualizadas.

# Funcionalidades
• Conversão de moedas: Converta o valor inserido em reais (BRL) para várias moedas internacionais e digitais.

• Atualização em tempo real: As taxas de câmbio são atualizadas automaticamente a cada 30 segundos.

• Interface simples e fácil de usar: Design intuitivo, permitindo uma navegação clara e direta.

# Tecnologias Utilizadas
• React.js: Biblioteca JavaScript para construção de interfaces de usuário.

• Axios: Cliente HTTP para realizar requisições à API de taxas de câmbio.

• AwesomeAPI: API que fornece taxas de câmbio em tempo real.
• CSS: Para estilização da interface.

# Como Rodar o Projeto Localmente
Siga as instruções abaixo para rodar o projeto localmente em sua máquina.

### Pré-requisitos:

Node.js (v14 ou superior) e npm ou yarn.

# Passos para execução

### 1. Clone o repositório:

git clone https://github.com/rcesar99/conversorBRL_Moedas.git

cd conversorBRL_Moedas
#
### 2. Instale as dependências:
npm install
#### ou se estiver usando yarn:
yarn install
#
### 3.  Execute o projeto:

npm start
ou
yarn start
#
### 4. Acesse a aplicação:

Abra seu navegador e acesse http://localhost:3000.
#
## Estrutura de pastas
/public -> # Arquivos públicos e estáticos

/src

    App.js ->     # Componente principal da aplicação
    App.css ->    # Estilos para o componente principal
    index.js ->   # Ponto de entrada da aplicação
    index.css ->   # Estilos globais
    README.md ->  # Documentação do projeto

# Explicação do Código

## App.js
Este arquivo contém o componente principal da aplicação, que gerencia o estado do valor em reais (BRL) e a moeda de destino para conversão.

useState: É usado para gerenciar o valor a ser convertido, a moeda de destino e as taxas de câmbio.

useEffect: Realiza uma chamada à API sempre que o componente for montado para obter as taxas de câmbio mais recentes.

axios.get(): Faz uma requisição à AwesomeAPI para obter as taxas de câmbio em tempo real.

converter(): Função que realiza a conversão do valor de BRL para a moeda selecionada com base nas taxas de câmbio recebidas.

## index.js
Este arquivo renderiza o componente App no DOM, usando o ReactDOM.




