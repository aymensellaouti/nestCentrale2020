import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateUpdateTodoDto } from './DTO/Create-update-todo.dto';
import { Todo } from './Model/todo.model';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {
  }
  @Get('hello')
  sayHello() {
    return 'Hello Todo';
  }
  // @Get()
  // getAllTodos(): Todo[] {
  //   return this.todoService.getAllTodos();
  // }
  // @Get(':id')
  // getTodoById(@Param('id') id): Todo {
  //   return this.todoService.findTodoById(id);
  // }
  //
  @Post()
  addTodo(@Body() todo: CreateUpdateTodoDto)  {
    return this.todoService.addTodo(todo);
  }
  //
  // @Delete(':id')
  // deleteTodo(@Param('id') id) {
  //   return this.todoService.deleteTodo(id);
  // }
}
