<h1 align="center">
  Fale Mais
</h1>

<h2 align="center">
    Acesse: <a href="https://show-me-the-code-fale-mais.netlify.app/" target="_blank">Fale Mais Page<a/>
</h2>

<!-- Badges -->
<p align="center">
    <a href="https://show-me-the-code-fale-mais.netlify.app/" target="_blank"><img src="https://img.shields.io/website?url=https%3A%2F%2Fmy-portfolio-mu-nine.vercel.app%2F"/><a/>
    <img src="https://img.shields.io/badge/licence-MIT-agree"/>
    <img src="https://img.shields.io/badge/challenge-WEB-red" />
</p>

## 📖 Description

A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente Telzir pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs
de origem e destino:

Origem    | Destino | $/min
--------- | ------- | ------
011       | 016     | 1.90
016       | 011     | 2.90
011       | 017     | 1.70
017       | 011     | 2.70
011       | 018     | 0.90
018       | 011     | 1.90

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).
A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores: (1) o valor da ligação com o plano e (2)
sem o plano. O custo inicial de aquisição do plano deve ser desconsiderado para este
problema.

Origem  | Destino | Tempo |  Plano FaleMais |  Com FaleMais |  Sem FaleMais
------- |-------  |-------|--------------  |--------------  |--------------
011     |016      |20     |FaleMais 30     |$0,00           |$38,00
011     |017      |80     |FaleMais 60     |$37,40          |$136,00
018     |011      |200    |FaleMais 120    |$167,20         |$380,00
018     |017      |100    |FaleMais 30     |-               |-

## 🚀 Getting Started

1. Download the repository

  - Using Git
```shell
  git clone https://github.com/gledson-ss/show-me-the-code.git
```

1. Installation
  - Using `yarn` 
   ```shell
   yarn
   ```
  

2. Execution
  - Using `yarn`

  ```shell
   yarn dev
  ```
  

## 🧐 What's inside?

  - React
  - Typescript
  - Styled-components 
  - React Icons
  - Eslint
  - Rusky
  - Cz-customizable

## 🔒 License

This project is under the MIT license. See the file [LICENSE](LICENSE) for more details.
