import { createSlice } from "@reduxjs/toolkit";
import conferenceRoomImage from "../assets/venues/conference-room.jpg";
import auditoriumImage from "../assets/venues/auditorium.jpg";
import presentationRoomImage from "../assets/venues/presentation-room.jpg";
import meetingRoomImage from "../assets/venues/meeting-room.jpg";
import smallMeetingRoomImage from "../assets/venues/small-meeting-room.jpg";

export const venueSlice = createSlice({
  name: "venue",
  // Define the initial state
  initialState: [
    {
      img: conferenceRoomImage,
      name: "Conference Room (Capacity: 15)",
      cost: 3500,
      quantity: 0,
    },
    {
      img: auditoriumImage,
      name: "Auditorium Hall (Capacity: 200)",
      cost: 5500,
      quantity: 0,
    },
    {
      img: presentationRoomImage,
      name: "Presentation Room (Capacity: 50)",
      cost: 700,
      quantity: 0,
    },
    {
      img: meetingRoomImage,
      name: "Large Meeting Room (Capacity: 10)",
      cost: 1100,
      quantity: 0,
    },
    {
      img: smallMeetingRoomImage,
      name: "Small Meeting Room (Capacity: 5)",
      cost: 900,
      quantity: 0,
    },
  ],

  // Define the reducers
  reducers: {
    incrementVenueQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        if (
          state[index].name === "Auditorium Hall (Capacity: 200)" &&
          state[index].quantity >= 3
        ) {
          return;
        }
        state[index].quantity++;
      }
    },
    decrementVenueQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

// EXport the actions and reducer
export const { incrementVenueQuantity, decrementVenueQuantity } = venueSlice.actions;
export default venueSlice.reducer;
