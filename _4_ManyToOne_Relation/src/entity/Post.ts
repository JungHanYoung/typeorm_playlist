import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Post extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      title: string;

      // User가 삭제될 때의 Post행동.
      @ManyToOne(() => User, user => user.posts, {
            onDelete: "SET NULL"
      })
      @JoinColumn()
      author: User;

}