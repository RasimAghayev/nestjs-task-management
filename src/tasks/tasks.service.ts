import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }
  /*
    getAllTasks(): Task[]{
        return this.tasks;
    }

    getTaskWithFilters(filterDto: GetTasksFilterDto): Task[]{
        const {status,search}=filterDto;
        let tasks= this.getAllTasks();
        if (status){
            tasks =tasks.filter(task=> task.status === status);
        }
        if(search){
            tasks=tasks.filter(task=>
            task.title.includes(search)||
            task.description.includes(search),
            );
        }
        return tasks;
    }
     */

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return found;
  }
  /*
    getTaskById( id: string): Task{
        const found=this.tasks.find(task=>task.id===id);
        if (!found){
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        return found;
    }
    */

  async createTask(createTaskDto: CreateTaskDto) {
    return this.taskRepository.createTask(createTaskDto);
  }
  /*
    @UsePipes(ValidationPipe)
    createTask( createTaskDto: CreateTaskDto){
        const {title,description}=createTaskDto;
        const task: Task={
            id: uuidv1(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    */

  async deleteTask(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
  /*
    deleteTask(id :string) : void{
        const found = this.getTaskById(id);
        this.tasks=this.tasks.filter(task=> task.id!==found.id);
    }
    */

  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }
  /*
    updateTaskStatus(id: string, status: TaskStatus): Task{
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
    */
}
