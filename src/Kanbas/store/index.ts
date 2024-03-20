import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/reducer";
export interface KanbasState {
  modulesReducer: {
    modules: any[];
    module: any;
  };
}
const Store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default Store