<h2>Interfaces e Tipagem Avançada</h2>

<h3>1.1. O que são Interfaces?</h3>
<p>Interfaces são estruturas que permitem definir contratos para objetos, garantindo que possuam determinados atributos e métodos.</p>
<pre><code>interface Usuario {
    nome: string;
    idade: number;
    email?: string; // Propriedade opcional
}
const usuario1: Usuario = {
    nome: "Ana",
    idade: 25
};</code></pre>

<h3>1.2. Interfaces com Funções</h3>
<p>Interfaces também podem ser usadas para tipar funções.</p>
<pre><code>interface Soma {
    (a: number, b: number): number;
}
const somar: Soma = (x, y) => x + y;
console.log(somar(10, 5));</code></pre>

<h3>1.3. Extensão de Interfaces</h3>
<p>Podemos estender interfaces para reutilizar propriedades e manter um código mais organizado.</p>
<pre><code>interface Animal {
    nome: string;
    idade: number;
}
interface Cachorro extends Animal {
    raca: string;
}
const meuCachorro: Cachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};</code></pre>

<h3>2. Generics</h3>

<h3>2.1. O que são Generics?</h3>
<p>Generics permitem a criação de código reutilizável e flexível, permitindo que uma função, interface ou classe trabalhe com diferentes tipos sem perder a segurança da tipagem.</p>
<p>Exemplo Simples:</p>
<pre><code>function retornarElemento<T>(elemento: T): T {
    return elemento;
}
console.log(retornarElemento<number>(10)); // 10
console.log(retornarElemento<string>("Olá TypeScript")); // "Olá TypeScript"</code></pre>

<h3>2.2. Generics em Interfaces</h3>
<p>Usando Generics em interfaces para definir respostas de API, por exemplo:</p>
<pre><code>interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}
const respostaTexto: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};
const respostaNumerica: RespostaAPI<number> = {
    data: 200,
    sucesso: true
};</code></pre>

<h3>2.3. Generics em Classes</h3>
<p>As classes também podem se beneficiar dos Generics. Exemplo de uma classe <strong>Caixa</strong> que pode armazenar qualquer tipo de conteúdo:</p>
<pre><code>class Caixa<T> {
    conteudo: T;
    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
    obterConteudo(): T {
        return this.conteudo;
    }
}
const caixaNumerica = new Caixa<number>(100);
console.log(caixaNumerica.obterConteudo()); // 100</code></pre>

<h3>3. Manipulação Avançada de Tipos</h3>

<h3>3.1. Type Aliases</h3>
<p>TypeScript permite definir alias para tipos, facilitando a reutilização e legibilidade do código.</p>
<pre><code>type ID = string | number;
function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}</code></pre>

<h3>3.2. Union Types</h3>
<p>Union Types permitem que uma variável aceite múltiplos tipos de dados.</p>
<pre><code>let resposta: string | boolean;
resposta = "Sucesso"; // Saída: "Sucesso"
resposta = true; // Saída: true</code></pre>

<h3>3.3. Intersection Types</h3>
<p>Intersection Types combinam múltiplos tipos em um só.</p>
<pre><code>type Pessoa = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
    salario: number;
};
type FuncionarioDetalhado = Pessoa & Funcionario;
const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};</code></pre>

<h3>3.4. Utility Types</h3>
<p>TypeScript fornece tipos utilitários prontos como <strong>Partial<T></strong> para tornar todas as propriedades opcionais:</p>
<pre><code>interface Produto {
    id: number;
    nome: string;
    preco: number;
}
const produtoParcial: Partial<Produto> = {
    nome: "Notebook"
};</code></pre>

<h3>4. Boas Práticas em TypeScript</h3>

<h3>4.1. Use Tipos Específicos Sempre que Possível</h3>
<p>Evite o uso de <strong>any</strong> para garantir a segurança da tipagem.</p>
<pre><code>// Evite
let valor: any = "Teste";
valor = 10;

// Melhor
let valorCerto: string | number = "Teste";</code></pre>

<h3>4.2. Prefira Interfaces e Type Aliases</h3>
<p>Defina contratos claros para objetos para melhorar a manutenção do código.</p>
<pre><code>interface Cliente {
    nome: string;
    idade: number;
}</code></pre>

<h3>4.3. Utilize Readonly para Propriedades Imutáveis</h3>
<p>Use <strong>readonly</strong> para garantir que propriedades não sejam alteradas.</p>
<pre><code>interface Config {
    readonly versao: string;
}
const configApp: Config = { versao: "1.0.0" };
// configApp.versao = "1.1.0"; // Erro</code></pre>

<h3>4.4. Documente Seu Código</h3>
<p>Adicione comentários para explicar trechos complexos e use JSDoc para documentar funções.</p>
<pre><code>/**
 * Soma dois números e retorna o resultado.
 * @param a Primeiro número
 * @param b Segundo número
 * @returns Soma dos dois valores
 */
function somarValores(a: number, b: number): number {
    return a + b;
}</code></pre>
