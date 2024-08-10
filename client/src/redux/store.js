import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
/* in userSlice we exported it as default hence we can 
change the name according to our liking.*/

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
