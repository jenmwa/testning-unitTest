/**
 * @jest-environment jsdom
 */

import { displayError } from "../ts/main";

beforeEach(() => {
  document.body.innerHTML = "";
});

//import { createNewToDo, createHTML } from '../ts/main';

// /**
//  * FUNCTIONS IN MAIN.TS
//  * 
//  * createNewTodo - 2 tests, if & else
//  * createHTML - 
//  * toggleToDo
//  * displayError - add class, remove class, show error? 
//  * clearTodos
//  * 
//  * localStorage?
//  * 
//  * addToDo (import from functions.ts)
//  * changeToDo (import from functions.ts)
//  * removeAllTodos (import from functions.ts)
//  * 
//  */

test("should add CSS class when show is true", () => {
  //arrange
  let errorMsg = "errorText";
  document.body.innerHTML = `<div id="error" class="error"></div>`;

  //act
  displayError(errorMsg, true);

  //assert
  let result = (document.getElementById("error")?.innerHTML);
  expect(result).toBe(errorMsg);

});









// test('name', () => {
  
// describe('localStorage tests',() => {

// });

// describe('arrays tests',() => {

// });

// import { addTodo } from "../ts/functions";
// import { Todo } from "../ts/models/Todo";

// test('should add todo to list',() => {
//   let todos: Todo[] = [];
//   let todoText: string = "do this";
//   let length = todos.length;

//   addTodo(todoText, todos);

//   expect(todos.length).toBe(length +1);
//   expect(todos[todos.length].todoText).toBe(todoText);

// });

// //test för if
// //test som kör else