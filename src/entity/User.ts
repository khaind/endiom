import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import {Length, IsNotEmpty, IsDefined} from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
@Unique(["userName"])
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

  @Column()
  @CreateDateColumn()
  createAt!: Date;

  @Column()
  @UpdateDateColumn()
  updateAt!: Date;

  // TODO should be pre-save middleware
  hashPassword () {
    this.password = bcrypt.hashSync(this.password, 8);
  }
}