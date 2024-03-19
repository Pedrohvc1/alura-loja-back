import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';
import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';
import { ListaProdutoDTO } from './dto/ListaProduto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async criaProduto(produtoEntity: ProdutoEntity) {
    await this.produtoRepository.save(produtoEntity);
  }
  async atualizaProduto(id: string, produtoEntity: AtualizaProdutoDTO) {
    await this.produtoRepository.update(id, produtoEntity);
  }
  async deletaProduto(id: string) {
    await this.produtoRepository.delete(id);
  }
  async listaProdutos() {
    const produtosSalvos = await this.produtoRepository.find();
    const produtosLista = produtosSalvos.map(
      (produto) =>
        new ListaProdutoDTO(
          produto.id,
          produto.nome,
          // produto.valor,
          // produto.quantidade,
          // produto.descricao,
          // produto.categoria,
        ),
    );
    return produtosLista;
  }
}
