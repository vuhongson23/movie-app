// import { createStore } from "redux";
// import rootReducer from "./rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);

// export default store;

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
