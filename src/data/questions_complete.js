const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas.",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference (Referência de Hiperlink).",
      },
      {
        question: "As listas não ordenadas têm a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
        tip: "A tag começa com 'u', de 'unordered'.",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
        tip: "Em inglês, significa 'requerido' ou 'necessário'.",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
        tip: "Lembra a palavra 'pé' em inglês ('foot').",
      },
      {
        question: "Qual tag é usada para criar um link?",
        options: ["<a>", "<link>", "<href>", "<nav>"],
        answer: "<a>",
        tip: "É uma única letra, inicial de 'anchor'.",
      },
      {
        question: "Qual atributo especifica um texto alternativo para imagens?",
        options: ["alt", "title", "src", "description"],
        answer: "alt",
        tip: "Abreviação de 'alternative text'.",
      },
      {
        question: "Qual elemento HTML é usado para criar uma tabela?",
        options: ["<table>", "<tr>", "<td>", "<grid>"],
        answer: "<table>",
        tip: "O nome já indica sua função!",
      },
      {
        question: "Qual tag é usada para criar uma lista ordenada?",
        options: ["<ul>", "<ol>", "<li>", "<list>"] ,
        answer: "<ol>",
        tip: "O 'o' indica 'ordered'.",
      },
      {
        question: "O que significa HTML?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "HyperText and Markup Language",
          "Home Tool Markup Language"
        ],
        answer: "HyperText Markup Language",
        tip: "É a linguagem de marcação usada para criar páginas web.",
      }
    ]
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Apenas 'color', sem prefixos.",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
        tip: "Relacionada ao tamanho da fonte ('size').",
      },
      {
        question: "Qual propriedade altera o fundo de um elemento?",
        options: ["background", "color", "border", "padding"],
        answer: "background",
        tip: "Refere-se ao 'plano de fundo' do elemento.",
      },
      {
        question: "Como deixamos um elemento em negrito com CSS?",
        options: ["font-style", "text-decoration", "font-weight", "bold"],
        answer: "font-weight",
        tip: "Determina o 'peso' da fonte.",
      },
      {
        question: "Qual propriedade muda o espaçamento entre letras?",
        options: ["line-height", "word-spacing", "letter-spacing", "spacing"],
        answer: "letter-spacing",
        tip: "Relacionada ao espaço entre letras.",
      },
      {
        question: "Qual unidade de medida é relativa ao tamanho da fonte padrão?",
        options: ["px", "em", "%", "vh"],
        answer: "em",
        tip: "Baseada no tamanho da fonte do elemento pai.",
      },
      {
        question: "Qual regra CSS é usada para aplicar estilos específicos a um tipo de dispositivo?",
        options: ["@media", "@device", "responsive", "query"],
        answer: "@media",
        tip: "Usada para media queries.",
      },
      {
        question: "Qual propriedade define a opacidade de um elemento?",
        options: ["opacity", "visibility", "display", "transparent"],
        answer: "opacity",
        tip: "Determina o quão transparente um elemento é.",
      },
      {
        question: "O que significa a sigla CSS?",
        options: [
          "Cascading Style Sheet",
          "Creative Style Sheet",
          "Computer Style System",
          "Cascading Simple Sheet"
        ],
        answer: "Cascading Style Sheet",
        tip: "Relacionada a estilos em cascata.",
      },
      {
        question: "Qual propriedade define a velocidade de uma animação em CSS?",
        options: ["animation-speed", "transition-duration", "animation-duration", "speed"],
        answer: "animation-duration",
        tip: "Define a duração de uma animação.",
      }
    ]
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript"
        ],
        answer: "JavaScript puro",
        tip: "Significa 'puro', sem bibliotecas externas.",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
        tip: "Indica um valor constante que não pode ser alterado.",
      },
      {
        question: "Qual método é usado para exibir mensagens no console?",
        options: ["console.log()", "alert()", "document.write()", "print()"],
        answer: "console.log()",
        tip: "Útil para debug e exibição de mensagens.",
      },
      {
        question: "Qual operador é usado para comparar valores e tipos?",
        options: ["==", "!=", "===", "<="],
        answer: "===",
        tip: "Compara valores e tipos.",
      },
      {
        question: "Como declarar uma função em JavaScript?",
        options: ["function minhaFunc() {}", "def minhaFunc() {}", "minhaFunc() => {}", "lambda minhaFunc() {}"],
        answer: "function minhaFunc() {}",
        tip: "Palavra-chave usada para definir funções.",
      },
      {
        question: "Qual estrutura de repetição é mais utilizada para percorrer arrays?",
        options: ["for", "while", "foreach", "switch"],
        answer: "for",
        tip: "Mais eficiente para listas.",
      },
      {
        question: "O que significa JSON?",
        options: [
          "JavaScript Object Notation",
          "Java Serialized Object Notation",
          "Java Standard Output Notation",
          "Java Source Object Notation"
        ],
        answer: "JavaScript Object Notation",
        tip: "É um formato de dados leve.",
      },
      {
        question: "Qual método converte uma string em número inteiro?",
        options: ["parseInt()", "parseFloat()", "Number()", "toFixed()"],
        answer: "parseInt()",
        tip: "Interpreta apenas a parte inteira do número.",
      },
      {
        question: "Qual evento é acionado quando um usuário clica em um botão?",
        options: ["onclick", "onhover", "onpress", "onchange"],
        answer: "onclick",
        tip: "Relacionado ao clique do usuário.",
      },
      {
        question: "Como declarar uma variável em JavaScript?",
        options: ["var", "let", "const", "todas as anteriores"],
        answer: "todas as anteriores",
        tip: "Existem diferentes formas, dependendo do contexto.",
      }
    ]
  },
  {
    category: "Python",
    questions: [
      {
        question: "Qual palavra-chave define uma função em Python?",
        options: ["function", "def", "define", "lambda"],
        answer: "def",
        tip: "É uma abreviação de 'define'.",
      },
      {
        question: "Como imprimimos algo no console em Python?",
        options: ["print()", "echo()", "console.log()", "write()"],
        answer: "print()",
        tip: "É um comando curto e intuitivo, semelhante à escrita.",
      },
      {
        question: "Qual estrutura de controle de fluxo é usada para loops em Python?",
        options: ["for", "while", "loop", "repeat"],
        answer: "for",
        tip: "Usada para percorrer listas e sequências.",
      },
      {
        question: "Como declarar uma lista em Python?",
        options: ["[]", "{}", "()", "<>"],
        answer: "[]",
        tip: "Os colchetes são utilizados para listas.",
      },
      {
        question: "Qual operador é usado para verificar se um valor está em uma lista?",
        options: ["in", "exists", "has", "contains"],
        answer: "in",
        tip: "É um operador simples e intuitivo.",
      },
      {
        question: "Qual método remove um item de uma lista em Python?",
        options: ["remove()", "delete()", "discard()", "pop()"],
        answer: "remove()",
        tip: "Utilizado para excluir um elemento específico.",
      },
      {
        question: "Como fazemos um comentário de linha única em Python?",
        options: ["//", "#", "/* */", "--"],
        answer: "#",
        tip: "Usado antes da linha de comentário.",
      },
      {
        question: "Qual estrutura de dados armazena pares chave-valor em Python?",
        options: ["list", "set", "tuple", "dictionary"],
        answer: "dictionary",
        tip: "É equivalente a objetos JSON.",
      },
      {
        question: "Como abrimos um arquivo para leitura em Python?",
        options: ["open('arquivo.txt', 'r')", "read('arquivo.txt')", "file.open('arquivo.txt')", "open('arquivo.txt', 'w')"],
        answer: "open('arquivo.txt', 'r')",
        tip: "Modo 'r' significa leitura.",
      },
      {
        question: "Qual biblioteca padrão é usada para manipular expressões regulares em Python?",
        options: ["regex", "re", "regexp", "rex"],
        answer: "re",
        tip: "É uma abreviação direta de 'regular expressions'.",
      }
    ]
  },
  {
    category: "React",
    questions: [
      {
        question: "Qual comando cria um novo projeto React?",
        options: ["create-react-app", "react-new", "npm init react", "react-create"],
        answer: "create-react-app",
        tip: "É um comando famoso iniciado com 'create'.",
      },
      {
        question: "Qual hook é usado para gerenciar estado em componentes funcionais?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useState",
        tip: "Começa com 'use' e é responsável por armazenar valores dinâmicos.",
      },
      {
        question: "Qual comando usamos para renderizar um componente React no DOM?",
        options: ["ReactDOM.render()", "renderComponent()", "React.render()", "renderDOM()"],
        answer: "ReactDOM.render()",
        tip: "Utiliza a API do ReactDOM.",
      },
      {
        question: "O que significa JSX no React?",
        options: ["JavaScript XML", "JSON Extended", "Java Syntax Extension", "JavaScript Extension"],
        answer: "JavaScript XML",
        tip: "É uma sintaxe parecida com HTML dentro do JavaScript.",
      },
      {
        question: "Como passamos propriedades para um componente React?",
        options: ["Através de props", "Usando state", "Por meio de context", "Utilizando Redux"],
        answer: "Através de props",
        tip: "É o mecanismo padrão de passagem de dados entre componentes.",
      },
      {
        question: "Qual hook é utilizado para efeitos colaterais em componentes React?",
        options: ["useEffect", "useState", "useMemo", "useReducer"],
        answer: "useEffect",
        tip: "Executa código após a renderização do componente.",
      },
      {
        question: "Qual método de ciclo de vida é chamado quando um componente é montado?",
        options: ["componentDidMount", "componentWillMount", "componentDidUpdate", "componentWillUnmount"],
        answer: "componentDidMount",
        tip: "Ocorre logo após o componente ser inserido no DOM.",
      },
      {
        question: "Qual hook é usado para armazenar valores que não disparam re-renderizações?",
        options: ["useRef", "useMemo", "useEffect", "useReducer"],
        answer: "useRef",
        tip: "É útil para armazenar referências a elementos DOM.",
      },
      {
        question: "Qual biblioteca é frequentemente usada para gerenciar estado global em aplicações React?",
        options: ["Redux", "MobX", "Context API", "Todas as anteriores"],
        answer: "Todas as anteriores",
        tip: "Cada uma tem um propósito específico.",
      },
      {
        question: "Como criar um componente funcional em React?",
        options: ["function MeuComponente() {}", "class MeuComponente extends React.Component {}", "React.createComponent()", "const MeuComponente = new Component()"],
        answer: "function MeuComponente() {}",
        tip: "A sintaxe mais moderna usa funções.",
      }
    ]
  },
  {
    category: "C#",
    questions: [
      {
        question: "Qual palavra-chave é usada para declarar uma classe em C#?",
        options: ["class", "struct", "object", "interface"],
        answer: "class",
        tip: "É a mesma palavra usada para definir classes em outras linguagens OO.",
      },
      {
        question: "Qual tipo de dado armazena um número inteiro em C#?",
        options: ["int", "float", "double", "string"],
        answer: "int",
        tip: "É a abreviação de 'integer' (inteiro).",
      },
      {
        question: "Qual símbolo é usado para indicar herança em C#?",
        options: [":", "extends", "=>", "inherits"],
        answer: ":",
        tip: "É um símbolo simples, diferente de outras linguagens como Java.",
      },
      {
        question: "Qual método é chamado automaticamente quando uma classe é instanciada?",
        options: ["Main", "Init", "Constructor", "Finalize"],
        answer: "Constructor",
        tip: "Tem o mesmo nome da classe e é executado na criação do objeto.",
      },
      {
        question: "Como declaramos uma constante em C#?",
        options: ["const", "final", "readonly", "static"],
        answer: "const",
        tip: "Não pode ser alterada após a inicialização.",
      },
      {
        question: "Qual estrutura de controle é usada para percorrer um array?",
        options: ["for", "while", "foreach", "do-while"],
        answer: "foreach",
        tip: "Itera diretamente pelos elementos da coleção.",
      },
      {
        question: "Qual namespace contém as classes básicas do C#?",
        options: ["System", "Microsoft.CSharp", "Core", "Base"],
        answer: "System",
        tip: "É a biblioteca padrão do C#.",
      },
      {
        question: "Qual operador é usado para verificar se um objeto é de um tipo específico?",
        options: ["is", "as", "typeof", "instanceof"],
        answer: "is",
        tip: "Permite verificar a compatibilidade de tipos.",
      },
      {
        question: "Qual palavra-chave usamos para tratar exceções em C#?",
        options: ["try", "catch", "finally", "todas as anteriores"],
        answer: "todas as anteriores",
        tip: "O tratamento de exceções é feito com um bloco completo.",
      },
      {
        question: "Qual estrutura de dados é usada para armazenar pares chave-valor?",
        options: ["Dictionary", "List", "Array", "Stack"],
        answer: "Dictionary",
        tip: "É semelhante a um mapa ou objeto em outras linguagens.",
      }
    ]
  }
];

export default data;
