import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Announcement } from "./announcement.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("text")
  comment: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;

  @ManyToOne(() => Announcement, (announcement) => announcement.comments)
  announcement: Announcement;
}
