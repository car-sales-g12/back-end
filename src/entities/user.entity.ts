import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import { Address } from "./address.entity";
import { Announcement } from "./announcement.entity";
import { Comment } from "./comment.entity";
import { getRounds, hashSync } from "bcryptjs";
import { text } from "express";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ unique: true, length: 250 })
  email: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 25 })
  telephone: string;

  @Column({ length: 20 })
  birth_date: string;

  @Column({ length: 250 })
  password: string;

  @Column({ default: false })
  is_seller: boolean;

  @Column({ nullable: true, type: "text" })
  perfilImg: string | null;

  @Column({ type: "text", nullable: true })
  description: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const hasRounds: number = getRounds(this.password);
    if (!hasRounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}
