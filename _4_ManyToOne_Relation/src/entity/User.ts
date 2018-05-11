import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class User extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      firstName: string;

      @Column()
      lastName: string;

      @Column()
      age: number;

      @OneToMany(() => Post, post => post.author)
      posts: Post[];

}