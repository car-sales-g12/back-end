import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("addresses")
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

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;
}
