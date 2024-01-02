"use client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userSlice";
import { api } from "./api/apiSlice";
import surveyFormReducer from "./feature/survey/surveySlice";
import mealPlanReducer from "./feature/meal/mealSlice";
import workoutReducer from "./feature/workout/workoutSlice";

const store = configureStore({
  reducer: {
    mealplan: mealPlanReducer,
    workout: workoutReducer,
    user: userReducer,
    surveyForm: surveyFormReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
