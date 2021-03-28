import * as bcrypt from 'bcryptjs';
import { IsDefined } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Idiom } from './Idiom';

@Entity()
@Unique(['userName'])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsDefined()
  userName!: string;

  @Column()
  @IsDefined()
  password!: string;

  @Column()
  email!: string;

  @OneToMany((type) => Idiom, (idiom) => idiom.user)
  idioms!: Idiom[];

  @Column()
  @CreateDateColumn()
  createAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;

  // TODO should be pre-save middleware
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}

