import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Image } from "./image.entity";

@Entity("announcements")
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  brand: string;

  @Column({ length: 100 })
  model: string;

  @Column({ length: 100 })
  year: string;

  @Column({ length: 100 })
  fuel: string;

  @Column("decimal", { precision: 10, scale: 2 })
  km: number;

  @Column({ length: 100 })
  color: string;

  @Column({ default: false })
  good_deal: boolean;

  @Column({ default: true })
  active: boolean;

  @Column("decimal", { precision: 10, scale: 2 })
  value: number;

  @Column({ type: "text", nullable: true })
  description: string | null | undefined;

  @Column()
  cover_img: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => User, (user) => user.announcements)
  user: User;

  @OneToMany(() => Comment, (comment) => comment.announcement)
  comments: Comment[];

  @OneToMany(() => Image, (image) => image.announcement)
  images: Image[];
}
