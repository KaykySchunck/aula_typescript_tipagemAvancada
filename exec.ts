// Exec 1
interface Carro{

    marca: string ;
    modelo: string ;
    ano: number ;
    motor: any | string ;


}

const meuCarro: Carro = {

        marca: "Honda",
        modelo: "Civic",
        ano: 2006,
        motor: "2dw16"
};


//Exec 2
interface Multiplicacao{

    (a: number, b: number): number;

}
const somar: Multiplicacao = (x,y) => x*y 



//Exec 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const palavras = ["noite", "Boa"];
console.log("Array invertido (números):", inverterArray(numeros));
console.log("Array invertido (palavras):", inverterArray(palavras)); 



//Exec 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());



//Exec 5
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);



//Exec 6
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);