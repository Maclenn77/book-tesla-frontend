const RENTAL_CARS = 'book-tesla/view/RENTAL_CARS';
const API_URL = 'http://127.0.0.1:8000';
const axios = require('axios');

const initialState = [];

export const RetalsCarsMethod = (payload) => ({
  type: RENTAL_CARS,
  payload,
});

export const getRetalCars = async () => {
  const Cars = await fetch(`${API_URL}/v1/bookings`);
  const response = Cars.json();
  return response;
};

export const getRentals = (obj) => async (dispatch) => {
  getRetalCars().then((res) => {
    dispatch(RetalsCarsMethod(res));
  });
};

export const AddRental = async (data) => axios
  .post(`${API_URL}/v1/bookings`, {
    car_id: data.model,
    user_id: data.userId,
    location: data.date,
    date: data.location,
  })
  .catch((err) => err.response.data.error);

const RentalCars = (state = initialState, action) => {
  switch (action.type) {
    case RENTAL_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default RentalCars;
