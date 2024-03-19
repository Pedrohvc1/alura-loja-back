import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'produto_imagens' })
export class ProdutoImagemEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;

  @ManyToOne(() => ProdutoEntity, (produto) => produto.imagens, {
    orphanedRowAction: 'delete', // orphanedRowAction: 'delete' para deletar a imagem quando o produto for deletado
    onDelete: 'CASCADE', //onDelete: 'CASCADE' para deletar a imagem quando o produto for deletado
    onUpdate: 'CASCADE', //onUpdate: 'CASCADE' para deletar a imagem quando o produto for deletado
  })
  produto: ProdutoEntity; // ManyToOne relacionamento de muitos para um, o contrário do OneToMany no produto.entity.ts
}
