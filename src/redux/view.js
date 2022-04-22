const VIEW = 'book-tesla/view/VIEW';

const initialState = 'home';

export const ViewMethod = (payload) => ({
  type: VIEW,
  payload,
});

const ViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default ViewReducer;
