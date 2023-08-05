import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  street: string;

  @Column({ length: 250 })
  number: string;

  @Column({ length: 250 })
  complement: string;

  @Column({ length: 250 })
  state: string;

  @Column({ length: 250 })
  city: string;

  @Column({ length: 250 })
  zip_code: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user: User;
}
