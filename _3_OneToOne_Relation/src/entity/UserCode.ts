import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class UserCode extends BaseEntity {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      personalCode: string;

}