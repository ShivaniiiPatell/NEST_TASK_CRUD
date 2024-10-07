import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, DeleteDateColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;

  @Column({ type: 'timestamp', nullable: true })
  completed_at: Date;

  @ManyToOne(() => User, (user) => user.tasks, { nullable: false })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ name: 'userId', nullable: false })
  userId: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
