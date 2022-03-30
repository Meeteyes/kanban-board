import "./App.css";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Components
import Nav from "./components/Nav.js";
import TopBar from "./components/TopBar";
import Content from "./components/Content";

import tasks from "./reducers/tasks.js";

const reducer = combineReducers({
  tasks: tasks.reducer,
});

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <Nav />
        <TopBar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
