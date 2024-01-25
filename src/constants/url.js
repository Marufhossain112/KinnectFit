export const PROTOCOL_HOST = "http://localhost:8000/api/kv1";
// export const PROTOCOL_HOST = "https://kinnectfit-backend.onrender.com/api/kv1";

/* *************** Auth  url ****************** */

// USER AUTH URL
export const USER_LOGIN = "/user/sign-in";
export const USER_SIGN_UP = "/user/sign-up";

/* *************** User  url ****************** */

// Get all user
export const GET_ALL_USER = "/user/all-users";
// Get a single user
export const GET_A_USER = "/user";

/* *************** Workout url ****************** */

// Create workout
export const CREATE_WORKOUT = "/workout/create-workout";
// Get all workouts
export const GET_ALL_WORKOUTS = "/workout/workouts";
// Get all workouts
export const GET_SINGLE_WORKOUT = "/workout";


/* *************** Meal Plan url ****************** */

// create meal plan url
export const CREATE_MEAL_PLAN = "/meal-plan/create-mealplan";
// Get all meal plans url
export const GET_ALL_MEAL_PLANS = "/meal-plan/mealplans";
// Get single meal plan url
export const GET_SINGLE_MEAL_PLAN = "/meal-plan";
// Get all meals by meal plan url
export const GET_ALL_MEALS_BY_MEAL_PLAN = "/meal-plan/meals";

/* *************** Meal url ****************** */

// create meal url
export const CREATE_MEAL = "/meal/create-meal";
// Get all meals url
export const GET_ALL_MEALS = "/meal/meals";
// Get single meal url
export const GET_SINGLE_MEAL = "/meal";


/* *************** Reviews url ****************** */

// Create review
export const CREATE_REVIEW = "/review/create-review";
// get all reviews
export const GET_ALL_REVIEWS = "/review/reviews";
// get a single review
export const GET_A_SINGLE_REVIEW = "/review";
// get  reviews by meal plan
export const GET_REVIEWS_BY_MEAL_PLAN = "/review/mealplan-review";
// get  reviews by workout
export const GET_REVIEWS_BY_WORKOUT = "/review/workout-review";
// get  reviews by app
export const GET_REVIEWS_BY_APP = "/review/app-review";


/* *************** trainer url ****************** */
export const CREATE_TRAINER = "/trainer/create-trainer";
export const GET_ALL_TRAINERS = "/trainer/trainers";
export const GET_A_SINGLE_TRAINER = "/trainer";


/* *************** select meal url ****************** */
export const SELECT_MEAL = "/select-meal/select";
export const GET_ALL_SELECTED_MEALS = "/select-meal/meals";
export const GET_A_SINGLE_SELECTED_MEAL = "/select-meal/meal";
export const GET_ALL_SELECTED_MEALS_BY_USER_ID = "/select-meal/user-meals";

/* *************** profile info url ****************** */
export const CREATE_PROFILE_INFO = "/profile-info/create-profileinfo";
export const GET_ALL_PROFILE_INFO = "/profile-info/all-profiles";
export const GET_A_SINGLE_PROFILE_INFO = "/profile-info";

/* *************** workout module url ****************** */
export const CREATE_WORKOUT_MODULE = "/workout-module/create";
export const GET_ALL_WORKOUT_MODULES = "/workout-module/all-modules";
export const GET_A_SINGLE_WORKOUT_MODULE = "/workout-module";
export const GET_WORKOUT_MODULE_BY_WORKOUT = "/workout-module/workout";



