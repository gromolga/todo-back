import { TodoService } from './todo.service';
import { Controller } from '@nestjs/common';

@Controller()
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
}
