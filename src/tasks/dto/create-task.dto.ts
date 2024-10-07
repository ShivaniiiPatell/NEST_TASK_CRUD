import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

// Define TaskStatus enum in the same file
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

// CreateTaskDto with validation
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsString()
  @IsOptional() // Description is optional
  description?: string;

  @IsEnum(TaskStatus, { message: 'Status must be OPEN, IN_PROGRESS, or DONE' })
  status: TaskStatus;

  @IsNumber()
  @IsOptional() // userId is optional in the DTO
  userId?: number;
}
