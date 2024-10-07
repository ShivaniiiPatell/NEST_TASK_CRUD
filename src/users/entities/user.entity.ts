import { Entity, Column, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {Task} from '../../tasks/entities/task.entity'
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks?: Task[];
}
