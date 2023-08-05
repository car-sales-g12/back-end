import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Image } from "./image.entity";

@Entity()
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 100 })
  year: number;

  @Column({ length: 100 })
  fuel: string;

  @Column("decimal", { precision: 10, scale: 2 })
  km: number;

  @Column({ length: 100 })
  color: string;

  @Column("decimal", { precision: 10, scale: 2 })
  value_fipe: number;

  @Column("decimal", { precision: 10, scale: 2 })
  value: number;

  @Column({ type: "text" })
  description: string;

  @Column()
  cover_img: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.announcements)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.announcement)
  comments: Comment[];

  @OneToMany(() => Image, (image) => image.announcement)
  images: Image[];
}
