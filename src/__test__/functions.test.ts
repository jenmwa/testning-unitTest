import { addTodo, changeTodo, removeAllTodos } from '../ts/functions';
import { Todo } from "../ts/models/Todo";

/*************************************************************************************************************
 * ******************************** function addTodo ***************************************************
 *************************************************************************************************************/

describe ('should test add todo or not to list', () => {

  test('should add todo to list',() => {
  //arrange
  let todos: Todo[] = [];
  let todoText: string = "I should do this";
  let length = todos.length;

  //act
  addTodo(todoText, todos);
    
  //assert
  expect(todos.length).toBe(length +1);
  expect(todos[todos.length-1].text).toBe('I should do this');

  });

  test('should not add todo to list',() => {

    //arrange
    const todos: Todo[] = [];
    const todoText: string = '';
    let length = todos.length;
    
    //act
    addTodo(todoText, todos);
    
    //assert
    expect(todos.length).toBe(length);
    
    });
});

describe ('should test todo character length', () => {
  test('should add todo if todo is at least 3 characters', () => {

    //arrange
    const todos: Todo[] = [];
    const todoText: string = 'i should do this';

    //act
    const result = addTodo(todoText, todos);

    //assert
    expect(result.success).toBe(true);
    expect(todos).toHaveLength(1);
    expect(todos[0].text).toBe(todoText);

  });

  test('should not add todo if todo is less than 3 characters', () => {

    //arrange
    const todos: Todo[] = [];
    const todoText: string = "I";

    //act
    const shortResult = addTodo(todoText, todos);

    //assert
    expect(shortResult.success).toBe(false);
    expect(todos).toHaveLength(0);

  });
});

describe ('should test errorMsg', () => {
  test('should not return error msg if todo text is at least 3 characters', () => {

    //arrange
    const todos: Todo[] = [];
    const todo: string = 'this is a todo';
  
    //act
    const { success, error} = addTodo (todo, todos);
  
    //assert
    expect(success).toBe(true);
    expect(error).toEqual("");
  
  });

  test('should return error msg if todo text is less than 3 characters', () => {

  //arrange
  const todos: Todo[] = [];
  const todo: string = 'No';

  //act
  const { success, error} = addTodo (todo, todos);

  //assert
  expect(success).toBe(false);
  expect(error).toEqual("Du måste ange minst tre bokstäver");

  });
});

/*************************************************************************************************************
 * ******************************** function changeTodo ***************************************************
 *************************************************************************************************************/

describe ('should toggle done property of the todo', () => {

  test('should toggle done property of the todo if true', () => {

    //arrange
    const todo = new Todo ('string', false);
  
    //act
    changeTodo(todo);
  
    //assert
    expect(todo.done).toBeTruthy();
    
  });
  
  test('should not toggle the done property of the todo if false', () => {

    //arrange
    const todo = new Todo ('string', true);
  
    //act
    changeTodo(todo);
  
    //assert
    expect(todo.done).toBeFalsy();
  
  });
});

/*************************************************************************************************************
 * ******************************** function removeAllTodo ***************************************************
 *************************************************************************************************************/

test ('should remove all the todos from the list', () => {

  //arrange
  const todos: Todo[] = [
    new Todo ('I should do this', false),
    new Todo ('I should do that', false),
    new Todo ('I should do this as well', false),
  ];
  //act
  removeAllTodos(todos);
  //assert
  expect(todos.length).toEqual(0);
})
