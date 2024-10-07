import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(task: CreateTaskDto) {
    return this.taskRepository.save(task);
  }

  async findAll({ page, limit }: { page: number; limit: number }) {
    const [tasks, total] = await this.taskRepository.findAndCount({
      withDeleted: true,
      take: limit,
      skip: (page - 1) * limit,
    });

    return {
      data: tasks,
      total,
      page,
      limit,
    };
  }

  findOne(id: number) {
    return this.taskRepository.findOne({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.softDelete(id);
  }
}
