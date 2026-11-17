# Calculadora JavaScript

Projeto **educacional** de calculadora desenvolvido durante os estudos de JavaScript, com referência ao curso do **Hora de Codar**, de **Matheus Battisti**. A aplicação permite praticar manipulação do DOM, eventos de clique e lógica de operações aritméticas. O código recebeu correções e melhorias posteriores durante sua evolução.

Este projeto representa um exercício de aprendizado, **não um trabalho comercial entregue a um cliente**.

**[Abrir a demonstração no GitHub Pages](https://jkdev31.github.io/calculadora/)**

## Funcionalidades

- Operações básicas: adição (`+`), subtração (`-`), multiplicação (`*`) e divisão (`/`).
- Entrada de números e ponto decimal pelos botões da interface.
- Botão `=` para calcular o resultado da operação.
- `CE` para limpar a entrada atual; `C` para limpar toda a operação; `DEL` para apagar o último caractere da entrada.
- Tratamento de zero como primeiro operando, incluindo cálculos como `0 - 5` e `0 / 5`.
- Aviso **"Erro: divisão por zero"** quando uma operação tenta dividir por zero, com possibilidade de iniciar novo cálculo ou limpar o erro.

## Como utilizar

1. Abra a [demonstração](https://jkdev31.github.io/calculadora/) ou execute o projeto localmente.
2. Clique nos números e em um dos operadores (`+`, `-`, `*` ou `/`).
3. Digite o segundo número e clique em `=`.
4. Use `CE`, `C` ou `DEL` para limpar conforme necessário.

**Exemplo de tratamento de erro:** pressione `5`, `/`, `0` e `=`. O visor deverá mostrar **"Erro: divisão por zero"**. Ao digitar um novo número, a calculadora inicia outra entrada.

## Tecnologias utilizadas

- **HTML5:** estrutura da interface e botões.
- **CSS3:** layout, aparência do visor e estilo da mensagem de erro.
- **JavaScript:** classe `Calculator`, eventos de clique, atualização do visor e cálculos.

A aplicação utiliza JavaScript sem frameworks e não depende de um servidor para executar os cálculos.

## Estrutura do projeto

```text
calculadora/
├── index.html       # Interface da calculadora
├── css/
│   └── style.css    # Estilos da interface
├── js/
│   └── scripts.js   # Lógica dos cálculos e eventos
├── README.md        # Documentação
└── LICENSE          # Licença MIT
```

## Executar localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/JkDeV31/calculadora.git
   ```

2. Acesse a pasta `calculadora`.
3. Abra o arquivo `index.html` no navegador.

## Limitações e possíveis melhorias

- O uso foi implementado por meio dos botões da interface; ainda não há atalhos próprios para digitar expressões diretamente pelo teclado.
- O CSS utiliza uma largura fixa para a calculadora. A adaptação a telas pequenas ainda merece revisão.
- O repositório não contém uma suíte de testes automatizados versionada. Os cenários de cálculo já foram verificados separadamente durante as revisões do projeto, mas isso não equivale a uma cobertura completa.
- Casos numéricos extremos e diferentes tamanhos de tela ainda precisam de testes adicionais.

## Origem educacional e autoria

Projeto de estudo baseado no curso de JavaScript do **Hora de Codar**, apresentado por **Matheus Battisti**. O repositório é mantido por [JkDeV](https://github.com/JkDeV31) e documenta sua prática e evolução no desenvolvimento web.

## Licença

Distribuído sob a [licença MIT](LICENSE).
