import { configureStore } from "@reduxjs/toolkit";
import addOnsReducer from "./Redux/addOnsSlice";
import venueReducer from "./Redux/venueSlice";
import mealsReducer from "./Redux/mealsSlice";
import peopleReducer from "./Redux/peopleSlice";

export const store = configureStore({
  reducer: {
    addOns: addOnsReducer,
    venue: venueReducer,
    meals: mealsReducer,
    people: peopleReducer,
  },
});
