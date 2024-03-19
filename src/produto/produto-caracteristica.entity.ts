import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity({ name: 'produto_caracteristicas' })
export class ProdutoCaracteristicaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'descricao', length: 255, nullable: false })
  descricao: string;

  @ManyToOne(() => ProdutoEntity, (produto) => produto.caracteristicas) // ManyToOne relacionamento de muitos para um, o contrário do OneToMany no produto.entity.ts
  produto: ProdutoEntity;
}
