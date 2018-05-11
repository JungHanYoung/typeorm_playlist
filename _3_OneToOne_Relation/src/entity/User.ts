import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { UserCode } from "./UserCode";

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

      @OneToOne(() => UserCode)
      @JoinColumn()
      userCode: UserCode;

}