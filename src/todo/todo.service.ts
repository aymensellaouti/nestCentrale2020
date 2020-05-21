import { Injectable } from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUpdateTodoDto } from './DTO/Create-update-todo.dto';

@Injectable()
export class TodoService {
   private todos: Todo[] = [];
   constructor(
     @InjectModel('Todo') private todoModel: Model<Todo>
   ) {}

  //  getAllTodos(): Todo[] {
  //    return this.todos;
  //  }
  // findTodoById(id: number): Todo {
  //    const todo = this.todos.find(
  //      (todo) => todo.id === +id
  //    );
  //    if (!todo) {
  //      throw new NotFoundException(`"Le todo d'id ${id} n'existe pas`);
  //    } else {
  //      return todo;
  //    }
  // }
  //
  addTodo(todo: CreateUpdateTodoDto): Promise<Todo> {
     const newTodo = {name:'', description:''};
     console.log('new todo creadted');
     // newTodo.createdAt = new Date().toISOString();
     newTodo.name = todo.name;
     console.log('new todo creadted and added name');
     newTodo.description = todo.description;
     console.log('new todo creadted and added name');
     console.log(newTodo);
     return this.todoModel.create(newTodo);
  }
  //
  // deleteTodo(id: any): {count: number} {
  //   this.todos = this.todos.filter(
  //     (todo) => todo.id != id
  //   );
  //   return {count: 1};
  // }
}
