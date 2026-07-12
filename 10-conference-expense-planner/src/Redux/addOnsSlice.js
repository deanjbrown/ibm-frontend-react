import { createSlice } from "@reduxjs/toolkit";
import projectorsImage from "../assets/addOns/projectors.jpg";
import speakersImage from "../assets/addOns/speakers.jpg";
import microphonesImage from "../assets/addOns/microphones.jpg";
import whiteboardsImage from "../assets/addOns/whiteboards.png";
import signageImage from "../assets/addOns/signage.jpg";

export const addOnsSlice = createSlice({
  name: "addOns",

  // Define the initial state
  initialState: [
    {
      img: projectorsImage,
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: speakersImage,
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: microphonesImage,
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: whiteboardsImage,
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: signageImage,
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],

  // Define the reducers
  reducers: {
    incrementAddonQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },

    decrementAddonQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAddonQuantity, decrementAddonQuantity } =
  addOnsSlice.actions;
export default addOnsSlice.reducer;
