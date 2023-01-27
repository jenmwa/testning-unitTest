/**
 * @jest-environment jsdom
 */

import * as functions from "../ts/functions";
import * as main from "../ts/main";

import { Todo } from "../ts/models/Todo";


beforeEach(() => {
  document.body.innerHTML = '';
});


//import { createNewToDo, createHTML } from '../ts/main';

    // expect(spy).toHaveBeenCalled();
    // expect(spy).toHaveBeenCalledTimes(1);
    // expect(spy).toHaveBeenCalledWith('lorem');


// /**
//  * FUNCTIONS IN MAIN.TS
//  * 
//  * createNewTodo - if & else calling, test IF if working.
//  * createHTML - 
//  * toggleToDo - check calling changeTodo & createHtml
//  * displayError - add class, remove class, - should add/remove errorMsg depending on argument
//  * clearTodos - check calling removeAllTodos & createHtml
//  * 
//  * 
//  * addToDo (import from functions.ts)
//  * changeToDo (import from functions.ts)
//  * removeAllTodos (import from functions.ts)
//  * 
//  */

describe ('should call changeTodo & createHTML', () => {

  test('should call changeTodo', () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    let todoList: Todo[] = [
      {
        text: 'do this',
        done: true
      }
    ]

    // let todos: Todo[] = [todo];
    const spyOnChangeTodo = jest.spyOn(functions, 'changeTodo').mockReturnValue();
    // let spyOnCreateHtml = jest.spyOn(main, 'createHtml').mockReturnValue;
    
    //act
    main.toggleTodo(todoList[0]);

    //assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
    // expect(spyOnCreateHtml).toBeCalled();

  });

  test('should call createHtml', () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    let todoList: Todo[] = [
      {
        text: 'do this',
        done: true
      }
    ]

    let spyOnCreateHtml = jest.spyOn(main, 'createHtml').mockReturnValue();
    
    //act
    main.toggleTodo(todoList[0]);

    //assert
    expect(spyOnCreateHtml).toHaveBeenCalled();

  });
});

describe('should add/remove errorMsg depending on argument ', () => {

  test('should show error when show is true', () => {
    //arrange
    const errorMsg = 'errorText';
    const errorShow = true;
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    //act
    main.displayError(errorMsg, errorShow);

    //assert
    let result:HTMLDivElement = (document.querySelector('#error') as HTMLDivElement);
    expect(result.classList.contains('show')).toBeTruthy();

  });

  test("should remove error when show is false", () => {
    //arrange
    let errorMsg = 'errorText';
    const errorShow = false;
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    //act
    main.displayError(errorMsg, errorShow);

    //assert
    let result:HTMLDivElement = document.querySelector('#error') as HTMLDivElement;
    expect(result.classList.contains('show')).toBeFalsy();

  });
});

describe('should call removeAllTodos & createHTML', () => {

  test('should call removeAllTodos & createHtml', () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
    let todos: Todo[] = [];
    let spyOnRemoveAllTodos = jest.spyOn(functions, 'removeAllTodos').mockReturnValue();
    
    //act
    main.clearTodos(todos);

    //assert
    expect(spyOnRemoveAllTodos).toHaveBeenCalled();
    spyOnRemoveAllTodos.mockRestore(); 

  });

  test('should call createHtml', () => {
    //arrange
    let todos: Todo[] = [];
    let spyOnCreateHtml = jest.spyOn(main, 'createHtml').mockReturnValue();
    
    //act
    main.clearTodos(todos);

    //assert
    expect(spyOnCreateHtml).toHaveBeenCalled();

  });

});

// test('name', () => {
  
// describe('localStorage tests',() => {

// });

// describe('arrays tests',() => {

// });



// //test för if
// //test som kör else