/**
 * @jest-environment jsdom
 */

import * as functions from "../ts/functions";
import * as main from "../ts/main";

import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";


beforeEach(() => {
  document.body.innerHTML = '';
});

/*************************************************************************************************************
 * ******************************** function createNewTodo ***************************************************
 *************************************************************************************************************/

describe ('should call addTodo, createHTML and displayerror', () => {
  test('should call addTodo', () => {
    //arrange
    const todos: Todo[] = [];
    const todoText: string = 'I should do this';
    const result: IAddResponse = { success: true, error: '' };
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    const spyOnAddTodo = jest.spyOn(functions, 'addTodo').mockReturnValue(result);

    //act
    main.createNewTodo(todoText, todos);

    //assert
    expect(spyOnAddTodo).toHaveBeenCalled();
    spyOnAddTodo.mockRestore();

  });

  test('should call createHtml', () => {
    //arrange
    const todos: Todo[] = [];
    const todoText: string = 'I should do this';
    const spyOnCreateHtml = jest.spyOn(main, 'createHtml').mockReturnValue();

    //act
    main.createNewTodo(todoText, todos);

    //assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    spyOnCreateHtml.mockRestore();

  });

  test('should call displayError', () => {
    //arrange
    const todos: Todo[] = [];
    const todoText: string = "I";
    const spyOnDisplayError = jest.spyOn(main, "displayError").mockReturnValue();

    //act
    main.createNewTodo(todoText, todos);

    //assert
    expect(spyOnDisplayError).toHaveBeenCalled();
    spyOnDisplayError.mockRestore();

  });
});

/*************************************************************************************************************
 * ******************************** function createHtml ***************************************************
 *************************************************************************************************************/

test('should create Html', () => {
  //arrange
  document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>
    `;
  const todos: Todo[] = [
    {
      text: 'I should do this',
      done: false
    }
  ];
  const todoList = `<li class="todo__text">I should do this</li>`;

  //act
  main.createHtml(todos);

  //assert
  const result = document.querySelector('#todos')?.innerHTML;
  expect(result).toEqual(todoList);
});

test('should call toggleTodo if li clicked', () => {
	//arrange
  document.body.innerHTML = `
  <ul id="todos" class="todo"> 
    <li class="todo"></li>
  </ul>
  `;
  const spyOnToggleToDo = jest.spyOn(main, "toggleTodo");

  //act
  main.createHtml([new Todo('I should do this', true)]);
  document.querySelector('li')?.click();

  //assert
  expect(spyOnToggleToDo).toHaveBeenCalled();
  spyOnToggleToDo.mockRestore();
});

describe('should toggle class done if done is true/false', () => {

  test('should add CSS class done if done', () => {
    //arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>`;
    const todos: Todo[] = [
      {
        text: 'I should do this',
        done: true
      }
    ];

    //act
    main.createHtml(todos);
  
    //assert
    let result: HTMLLIElement = document.querySelector(".todo__text") as HTMLLIElement;
    expect(result.classList.contains("todo__text--done")).toBeTruthy();
  });
  
  test('should not add CSS class done if done', () => {
    //arrange
    document.body.innerHTML = `
    <ul id="todos" class="todo"></ul>`;
    const todos: Todo[] = [
      {
        text: 'I should do this',
        done: false
      }
    ];

    //act
    main.createHtml(todos);
  
    //assert
    let result:HTMLLIElement = document.querySelector(".todo__text") as HTMLLIElement;
    expect(result.classList.contains("todo__text--done")).toBeFalsy();
  });

});


/*************************************************************************************************************
 * ******************************** function toggleTodo ***************************************************
 *************************************************************************************************************/


describe ('should call changeTodo & createHTML', () => {

  test('should call changeTodo', () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    const todoList: Todo[] = [
      {
        text: 'I should do this',
        done: true
      }
    ];
    const spyOnChangeTodo = jest.spyOn(functions, 'changeTodo').mockReturnValue();
    
    //act
    main.toggleTodo(todoList[0]);

    //assert
    expect(spyOnChangeTodo).toHaveBeenCalled();
    spyOnChangeTodo.mockRestore();

  });

  test('should call createHtml', () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

    let todoList: Todo[] = [
      {
        text: 'I should do this',
        done: true
      }
    ]

    let spyOnCreateHtml = jest.spyOn(main, 'createHtml').mockReturnValue();
    
    //act
    main.toggleTodo(todoList[0]);

    //assert
    expect(spyOnCreateHtml).toHaveBeenCalled();
    spyOnCreateHtml.mockRestore();

  });
});

/*************************************************************************************************************
 * ******************************** function displayError ***************************************************
 *************************************************************************************************************/

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
    const errorMsg = 'errorText';
    const errorShow = false;
    document.body.innerHTML = `<div id="error" class="error"></div>`;

    //act
    main.displayError(errorMsg, errorShow);

    //assert
    const result:HTMLDivElement = document.querySelector('#error') as HTMLDivElement;
    expect(result.classList.contains('show')).toBeFalsy();

  });
});

/*************************************************************************************************************
 * ******************************** function clearTodos ***************************************************
 *************************************************************************************************************/

describe('should call removeAllTodos & createHTML', () => {

  test('should call removeAllTodos', () => {
    //arrange
    document.body.innerHTML = `
      <ul id="todos" class="todo"></ul>
      `;
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
    spyOnCreateHtml.mockRestore();

  });

});
