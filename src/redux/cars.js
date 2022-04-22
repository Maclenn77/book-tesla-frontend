const CARS = 'book-tesla/cars/Cars';
const ADD_CAR = 'book-tesla/cars/Add_Car';
const axios = require('axios');

const API_URL = 'http://127.0.0.1:8000';

const initialState = [];

export const CarsMethod = (payload) => ({
  type: CARS,
  payload,
});

export const getCars = async () => {
  const Cars = await fetch(`${API_URL}/v1/cars`);
  const response = Cars.json();
  return response;
};

export const getAllCars = (obj) => async (dispatch) => {
  getCars().then((res) => {
    dispatch(CarsMethod(res));
  });
};

export const AddNewCar = async (data) => axios
  .post(`${API_URL}/v1/cars`, {
    model: data.model,
    image_link: data.imgCar,
  })
  .catch((err) => err.response.data.error);

export const DeleteCar = async (id) => axios
  .delete(`${API_URL}/v1/cars/${id}`, {})
  .catch((err) => err.response.data.error);

const CarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CARS:
      return action.payload;
    default:
      return state;
  }
};

export default CarsReducer;
