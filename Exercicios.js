let receita = {
    id: "3",
    titulo: "Miojo",
    porcoes: 1,
    ingredientes: ["2 copos d'agua","miojo","Sache de tempero"]
}
console.log(receita.ingredientes[0]);
console.log(receita.ingredientes[1]);
console.log(receita.ingredientes[2]);

let livro = [
    {
        titulo: "A Guerra dos Tronos",
        autor: "George R. R. Martin",
        lido: true
    },
    {
        titulo: "A Furia dos Reis",
        autor: "George R. R. Martin",
        lido: true
    },
    {
        titulo: "A Tormenta de Espadas",
        autor: "George R. R. Martin",
        lido: true
    },
    {
        titulo: "O Festim dos Corvos",
        autor: "George R. R. Martin",
        lido: true    
    },
    {
        titulo: "A Dan;a dos Dragões",
        autor: "George R. R. Martin",
        lido: false
    }

];

for (i=0; i<livro.length; i++){
    if (livro[i].lido){
        console.log(livro[i].titulo);
        console.log(livro[i].autor);
        console.log("Livro lido!");
    }else{
        console.log(livro[i].titulo);
        console.log(livro[i].autor);
        console.log("Livro não lido ainda!")
    }
}