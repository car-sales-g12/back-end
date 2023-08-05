import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Announcement } from "./announcement.entity";

@Entity()
export class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Announcement, (announcement) => announcement.images)
  announcement: Announcement;
}
