import * as React from "react";
import "./styles.css";

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
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
