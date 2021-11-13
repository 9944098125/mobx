import React from "react";
import { observer, useObservable } from "mobx-react-lite";

import "./App.css";

/* This is a simple example but when you use multiple pages it will be more useful */
const App = observer(() => {
  const store = useObservable({
    count: 1,
    addOne() {
      store.count++;
      /* unlike redux without creating a copy of the state, 
      we can directly modify the state here. */
    },
    minusOne() {
      store.count--;
    },
  });

  function add() {
    store.addOne();
    // we can directly access the methods of store
  }
  function minus() {
    store.minusOne();
    // we can directly access the methods of store
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-head">Count: {store.count}</h1>
        <button onClick={add}>Add</button>
        <button onClick={minus}>Minus</button>
      </header>
    </div>
  );
});

export default App;
