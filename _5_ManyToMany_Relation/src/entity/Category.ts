import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany } from "typeorm";
import { Question } from "./Question";

@Entity()
export class Category extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @ManyToMany(() => Question, question => question.categories)
      questions: Question[];

}