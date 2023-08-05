import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { Announcement } from "./announcement.entity";
import { Comment } from "./comment.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ length: 250 })
  name: string;

  @Column({ unique: true, length: 250 })
  email: string;

  @Column({ unique: true, length: 11 })
  cpf: string;

  @Column({ length: 25 })
  telephone: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column({ length: 250 })
  password: string;

  @Column({ default: false })
  is_seller: boolean;

  @Column({ type: "text", nullable: true })
  description: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
