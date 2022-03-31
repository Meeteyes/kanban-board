import { createSlice } from "@reduxjs/toolkit";
import taskList from "../initialState.json";

const tasks = createSlice({
  name: "tasks",
  initialState: {
    list: taskList,
  },
  reducers: {
    setTask: (store, action) => {
      // we receive the updated task as an object through payload. Create new array with old state, replace the task in question and return that array as the new state
      const storeUpdate = store.list;
      const index = storeUpdate.findIndex(
        (object) => object.idTask === action.payload.idTask
      );
      storeUpdate[index] = action.payload;
      store.list = [...storeUpdate];
    },
  },
});

export default tasks;
