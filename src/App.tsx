import * as React from "react";
import {render} from 'react-dom';

import "./styles.css";

import Counter from './components/Counter/Counter';
import Clock from './components/ClassComponent/class_component'
export default function App() {
  /*   type Todo = {
    readonly id: number;
    readonly text: string;
    readonly done: boolean;
  };
 */
  type Place = 'home' | 'work' | { custom: string }
  type Todo = Readonly<{
    id: number;
    text: string;
    done: boolean;
    place?: Place
  }>;

  type Foo = {
    bar: number;
  };
  type ReadonlyFoo = Readonly<Foo>;

  const hey: Todo = {
    id: 4,
    text: "HEYHEY",
    done: true
  };


  //Parameter "todo" must match the Todo type
  function toggleTodo(todo: Todo): Todo {
    return {
      id: todo.id,
      text: todo.text,
      done: !todo.done
    };
  }

  console.log(toggleTodo(hey));

  type CompletedTodo = Todo & {
    readonly done: true
  }

  function completeAll(todos: readonly Todo[]): CompletedTodo[]{
    return todos.map(todo => ({
      ...todo,
      done: true
    }))
  }

  console.log(
    completeAll([
      { id: 1, text: '…', done: false },
      { id: 2, text: '…', done: true }
    ])
  )

  function placeToString(place: Place): string {
    if (place === 'home') {
      return ' Home'
    } else if (place === 'work') {
      return ' Work'
    } else {
      return ' ' + place.custom
    }
  }

  return (
    <div className="App">
      <h1>Stuff</h1>
      <p>Based on:</p>
      <ul>
        <li><a href="https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/blob/master/README.md#basic-cheatsheet-table-of-contents">React+TypeScript Cheatsheets</a></li>
        <li><a href="https://www.typescriptlang.org/docs/handbook/basic-types.html">TypeScript Types</a></li>
        <li><a href="https://alligator.io/react/typescript-with-react/">Typescript with React</a></li>
        <li><a href="https://fettblog.eu/typescript-react/children/">Typescript guide</a></li>
      </ul>
      
      <h3>Counter</h3>
      <Counter/>
      <Clock/>
    </div>
  );
}
