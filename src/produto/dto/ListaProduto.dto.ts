// class ListaCaracteristicaProdutoDTO {
//   nome: string;
//   descricao: string;
// }

// class ListaImagemProdutoDTO {
//   url: string;
//   descricao: string;
// }

// export class ListaProdutoDTO {
//   id: string;
//   usuarioId: string;
//   nome: string;
//   valor: number;
//   quantidade: number;
//   descricao: string;
//   categoria: string;
//   caracteristicas: ListaCaracteristicaProdutoDTO[];
//   imagens: ListaImagemProdutoDTO[];
// }
export class ListaProdutoDTO {
  constructor(
    readonly id: string,
    readonly nome: string,
    // readonly valor: number,
    // readonly quantidade: number,
    // readonly descricao: string,
    // readonly categoria: string,
  ) {}
}
