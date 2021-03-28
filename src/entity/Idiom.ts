import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Length, IsNotEmpty, IsDefined } from 'class-validator';
import { User } from './User';

@Entity()
@Unique(['idiom'])
export class Idiom {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsDefined()
  idiom!: string;

  @Column('mediumtext')
  @IsDefined()
  meaning!: string;

  @Column('longtext')
  origin!: string;

  @Column('longtext')
  sample!: string;

  @ManyToOne((type) => User, (user) => user.idioms)
  user!: User;

  @Column()
  @CreateDateColumn()
  createAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;
}

